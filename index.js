const inquirer = require("inquirer");
const Engineer = require("./lib/employees/Engineer");
const Intern = require("./lib/employees/Intern");
const Manager = require("./lib/employees/Manager");
const fs = require("fs");
const path = require("path");
const generateHtml = require("./src/generate_html/html");

const employees = [];
const outputHtmlFile = path.join(__dirname, "output", "team.html");

async function main() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      message: "What is the role of the employee?",
      name: "role",
      choices: [
        "manager",
        "engineer",
        "intern"
      ]
    },
    {
      type: "input",
      message: "What is the ID of the employee?",
      name: "id"
    },
    {
      type: "input",
      message: "What is the email of the employee?",
      name: "email"
    },
    {
      type: "input",
      message: "What is the name of the employee?",
      name: "name"
    },
    {
      type: "input",
      message: "What is the office number?",
      name: "office_number",
      when: function(answers){
        return answers.role === "manager";
      }
    },
    {
      type: "input",
      message: "What is the github username?",
      name: "github",
      when: function(answers){
        return answers.role === "engineer";
      }
    },
    {
      type: "input",
      message: "What is the school name?",
      name: "school",
      when: function(answers){
        return answers.role === "intern";
      }
    },
    {
      type: "confirm",
      message: "Add another?",
      name: "add_another"
    }
  ]);

  // once we got an employee, store it
  // check for the role
  // create the employee obj based on the role
  // add to the employee array
  if(answers.role === "manager"){
    employees.push(new Manager(answers.id, answers.email, answers.name, answers.office_number));
  }
  if(answers.role === "engineer"){
    employees.push(new Engineer(answers.id, answers.email, answers.name, answers.github));
  }
  if(answers.role === "intern"){
    employees.push(new Intern(answers.id, answers.email, answers.name, answers.school));
  }

  console.log(employees);

  // once the user says enough, we will generate the thml based on all the employees collected
  if(!answers.add_another){
    // generate the html
    const html = generateHtml(employees);
    // call fs, write to a file
    fs.writeFileSync(outputHtmlFile, html, "utf-8");

  }else{
    // add another one 
    await main();
    
  }

}

main();
 


