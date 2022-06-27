describe("Greet Factory Function Tests", function () {
  it("should return the name string when name is valid", function () {
    let greetings = greet();
    greetings.enterName("ntsakelo");
    assert.equal("ntsakelo", greetings.getName());
  });
  it("should return an empty string when name entered is a number", function () {
    let greetings = greet();
    greetings.enterName(1);
    assert.equal("", greetings.getName());
  });
  it("should return the lowerCase string when name entered starts with a capital letter", function () {
    let greetings = greet();
    greetings.enterName("Kelvin");
    assert.equal("kelvin", greetings.getName());
  });
  it("should return the lowerCase string when name entered is in capital letters", function () {
    let greetings = greet();
    greetings.enterName("ANDILE");
    assert.equal("andile", greetings.getName());
  });
  describe("Check whether Name input is undefined", function () {
    it("should return true when name input is undefined", function () {
      let greetings = greet();
      greetings.enterName();
      assert.equal(true, greetings.definedState());
    });
    it("should return false when name input is not undefined", function () {
      let greetings = greet();
      greetings.enterName("Ntsakelo");
      assert.equal(false, greetings.definedState());
    });
  });
  describe("store Names and check for duplicates", function () {
    it("should store the name 'Alex' inside an object", function () {
      let greetings = greet();
      greetings.enterName("Alex");

      assert.deepEqual({ alex: 1 }, greetings.storeNames());
    });
    it("should not store the name 'Arnold' if the name is already stored in the object", function () {
      let greetings = greet();
      greetings.enterName("Arnold");

      assert.deepEqual({ arnold: 1 }, greetings.storeNames());
      greetings.enterName("arnold");

      assert.deepEqual({ arnold: 1 }, greetings.storeNames());
    });
    it("should not store multiple names in the object", function () {
      let greetings = greet();
      greetings.enterName("Arnold");

      assert.deepEqual({ arnold: 1 }, greetings.storeNames());
      greetings.enterName("Sizwe");

      assert.deepEqual({ arnold: 1, sizwe: 1 }, greetings.storeNames());
      greetings.enterName("Lizwe");

      assert.deepEqual(
        { arnold: 1, sizwe: 1, lizwe: 1 },
        greetings.storeNames()
      );
    });
  });
  describe("Error Messages", function () {
    it("should return 'Enter a name' when the name input is not entered and language is selected", function () {
      let greetings = greet();
      greetings.enterName();
      greetings.languageVal("afrikaans");
      assert.equal("Enter a name", greetings.errorMessage());
    });
    it("should return 'Select a language' when the name input is entered but no language selected", function () {
      let greetings = greet();
      greetings.enterName("Ntsakelo");
      greetings.languageVal("");
      assert.equal("Select a language", greetings.errorMessage());
    });
    it("should return 'Enter name and select a language' when the name input is not entered and no language selected", function () {
      let greetings = greet();
      greetings.enterName("");
      greetings.languageVal("");
      assert.equal(
        "Enter name and select a language",
        greetings.errorMessage()
      );
    });
    it("should return 'ntsakelo has been greeted already' when the name has been greeted", function () {
      let greetings = greet();
      greetings.enterName("Ntsakelo");

      assert.deepEqual({ ntsakelo: 1 }, greetings.storeNames());
      greetings.enterName("Ntsakelo");
      greetings.languageVal("english");
      greetings.storeNames();
      assert.equal(
        "ntsakelo has been greeted already",
        greetings.errorMessage()
      );
    });
  });
  describe("Greet in different languages", function () {
    it("should be able to greet in English", function () {
      let greetings = greet();
      greetings.enterName("Ntsakelo");
      assert.equal("Hello, ntsakelo!", greetings.languageVal("english"));
    });
    it("should be able to greet in Afrikaans", function () {
      let greetings = greet();
      greetings.enterName("Walter");
      assert.equal("Goeie dag, walter!", greetings.languageVal("afrikaans"));
    });
    it("should be able to greet in Xhosa", function () {
      let greetings = greet();
      greetings.enterName("Dikgang");
      assert.equal("Molo, dikgang!", greetings.languageVal("xhosa"));
    });
  });
});
