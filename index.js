
//16
function findShortestWord(romeli) {
    return romeli.reduce(
        (shortest, current) => {
      return current.length < shortest.length ? current : shortest;
    });
}
  
const romeli = ["aasdasdiasdiade", "nananannanaa", "erti", "vaaaaaa"];
console.log(findShortestWord(romeli)); 




//17
function countPositiveNumbers(jumber) {
    return jumber.filter(
        num => num > 0
    ).length;
}

const jumber = [1, -2, 3, 4, -5, 6];
console.log(countPositiveNumbers(jumber));

//19
function removeCharacter(text, charToRemove) {
    return text.replace(new RegExp(charToRemove, 'g'), '');
  }
  

const text = "Hello, world";
const charToRemove = ",";
console.log(removeCharacter(text, charToRemove));
  


//21
function findCommonElements(ww1, ee) {
    return ww1.filter(
        element => ee.includes(element)
    );
}
  
const ww1 = [1, 2, 3, 4, 5];
const ee = [4, 5, 6, 7, 8];
console.log(findCommonElements(
    ww1, ee
))