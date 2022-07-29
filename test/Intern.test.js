const Intern = require("../lib/employees/Intern");

describe('Intern test', () => {

    test('getSchool() will return github property', () => {
        
        const school = 'Coder Academy';
        const dummy2 = new Intern(9876,'yoko@gmail.com','Yoko', school);

        const result = dummy2.getSchool();

        expect(result).toStrictEqual(school);
    });

    test ("getRole() will return 'Intern'", () => {

        const role = "Intern";

        const dummy3 = new Intern(9876,'yoko@gmail.com','Yoko', role);

        const result = dummy3.getRole();

        expect(result).toStrictEqual(role);
    });

})