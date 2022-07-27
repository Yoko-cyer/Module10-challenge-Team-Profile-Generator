const Employee = require("../lib/employees/Employee");

describe("Employee Test", () => {

  test("getName() will return the id property", () => {

    // Arrange -- preprare the env
    const name = "Yoko";
    const fake = new Employee (8765, "yoko@gmail.com", "Yoko"); 

    // Act
    const result = fake.getName();

    // Assert
    expect(result).toStrictEqual(name);
  })

  test("getId() will return the id property", () => {

    // Arrange -- preprare the env
    const id = "9876";
    const fake = new Employee (id, "yoko@gmail.com", "Yoko"); 

    // Act
    const result = fake.getId();

    // Assert
    expect(result).toStrictEqual(id);
  })

  test("getEmail() will return the email property", () => {

    // Arrange -- preprare the env
    const email = "yoko@gmail.com";
    const fake = new Employee (1234, email, "Yoko"); 

    // Act
    const result = fake.getEmail();

    // Assert
    expect(result).toStrictEqual(email);
  })

})

