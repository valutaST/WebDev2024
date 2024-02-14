function makeUser() {
    return {
      name: "Джон",
      ref: this // значение this является undefined, потому что makeUser() вызвана как функция
    };
  };
  
  let user = makeUser();
  
  alert( user.ref.name ); // Error: Cannot read property 'name' of undefined
  // 