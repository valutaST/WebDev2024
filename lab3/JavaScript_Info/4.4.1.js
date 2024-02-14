let user = {
    name: "Джон",
    go: function() { alert(this.name) }
  } //пропущена точка с запятой
  
  (user.go)()
  
  // ошибка