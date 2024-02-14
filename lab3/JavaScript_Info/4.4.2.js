let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object] , здесь this ссылается на object

(obj.go)();             // (2) [object Object] , здесь также

(method = obj.go)();    // (3) undefined ,здесь выполняется функция и значеение this теряется

(obj.go || obj.stop)(); // (4) undefined , здесь тоже потеря значения this