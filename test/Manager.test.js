const Manager = require("../lib/employees/Manager");

describe('Manager test', () => {

    test('getOfficeNumber() will return github property', () => {
        
        const officeNumber = '1234';
        const dummy2 = new Manager(9876,'yoko@gmail.com','Yoko', officeNumber);

        const result = dummy2.getOfficeNumber();

        expect(result).toStrictEqual(officeNumber);
    });

    test ("getRole() will return 'Manager'", () => {

        const role = "Manager"

        const dummy3 = new Manager(9876,'yoko@gmail.com','Yoko', role);

        const result = dummy3.getRole();

        expect(result).toStrictEqual(role);
    });

})