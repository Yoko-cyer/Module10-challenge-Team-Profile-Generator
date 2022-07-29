const Engineer = require("../lib/employees/Engineer");

describe('Engineer test', () => {

    test('getGitHub() will return github property', () => {
        
        const gitHub = 'yoko-cyber';
        const dummy2 = new Engineer(9876,'yoko@gmail.com','Yoko', gitHub);

        const result = dummy2.getGithub();

        expect(result).toStrictEqual(gitHub);
    });

    test ("getRole() will return 'Engineer'", () => {

        const role = 'Engineer'

        const dummy3 = new Engineer(9876,'yoko@gmail.com','Yoko', role);

        const result = dummy3.getRole();

        expect(result).toStrictEqual(role);
    });

})