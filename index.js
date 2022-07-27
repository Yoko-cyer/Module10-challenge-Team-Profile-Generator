const inquirer = require("inquirer");

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
  // once the user says enough, we will generate the thml based on all the employees collected
  if(!answers.add_another){
    // generate the html
  }else{
    // add another one 
    await main();
    
  }

}

main();
// ask ID, name, email

// manager - office num
// engineer - github
// intern - school 


