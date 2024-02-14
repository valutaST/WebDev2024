function readNumber() {
    let n;
    do {
      n = prompt("Введите число", 0);
    } while ( !isFinite(n) );
  
    if (n === null || n === '') return null;
  
    return +n;
  }
  
  alert(`Число: ${readNumber()}`);
  