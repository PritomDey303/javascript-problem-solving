//ShiftingArrayElement function defination
function ShiftingArrayElement(array, d) {
  if (d < array.length) {
    const newArr1 = array.slice(0, d);
    const newArr2 = array.slice(d, array.length);
    const shiftedArr = [...newArr2, ...newArr1];
    return shiftedArr;
  } else {
    const remainder = d % array.length;
    //console.log(remainder);
    if (remainder === 0) {
      return array;
    } else {
      const newArr1 = array.slice(0, remainder);
      const newArr2 = array.slice(remainder, array.length);
      const shiftedArr = [...newArr2, ...newArr1];
      return shiftedArr;
    }
  }
}
//function calling
const array = [3, 4, 1, 9, 2, 7];
const d = 2;
const newArr = ShiftingArrayElement(array, d);
console.log(newArr); //showing output in the console
