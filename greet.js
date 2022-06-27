function greet() {
  let namesGreeted = {};
  let nameString = "";
  let langVal = "";
  let isUndefined = false;

  let isAvailable = false;
  //Function to get the name
  function enterName(val) {
    isUndefined = false;
    if (val == Number(val)) {
      nameString = "";
    } else if (val !== "" && val !== undefined) {
      nameString = val.toLowerCase();
    } else if (val === undefined) {
      isUndefined = true;
      nameString = "";
    } else {
      nameString = "";
    }
  }
  //Check whether the name input is undefined
  function definedState() {
    return isUndefined;
  }
  //Function to return the name
  function getName() {
    return nameString;
  }
  //store names in an object
  function storeNames() {
    if (getName()) {
      if (namesGreeted[getName()] === undefined) {
        namesGreeted[getName()] = 1;
      } else if (namesGreeted[getName()] !== undefined) {
        isAvailable = true;
      }
    }
    return namesGreeted;
  }

  ////greeting Functions

  //greet in english
  function greetEnglish() {
    if (getName()) {
      return `Hello, ${getName()}!`;
    }
  }
  //greet in Afrikaans
  function greetAfrikaans() {
    if (getName()) {
      return `Goeie dag, ${getName()}!`;
    }
  }
  //Greet in xhosa
  function greetXhosa() {
    if (getName()) {
      return `Molo, ${getName()}!`;
    }
  }
  //Language selection function
  function languageVal(val) {
    if (val === "english") {
      langVal = val;
      return greetEnglish();
    } else if (val === "afrikaans") {
      langVal = val;
      return greetAfrikaans();
    } else if (val === "xhosa") {
      langVal = val;
      return greetXhosa();
    }
  }
  //Error messages
  function errorMessage() {
    if (getName() && langVal === "") {
      return "Select a language";
    } else if (getName() === "" && langVal !== "") {
      return "Enter a name";
    } else if (!getName() && !langVal) {
      return "Enter name and select a language";
    } else if (isAvailable === true) {
      return `${getName()} has been greeted already`;
    }
  }
  //return object
  return {
    enterName,
    getName,
    definedState,
    storeNames,
    languageVal,
    errorMessage,
  };
}
