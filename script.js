const calculate = () => {
  const value = document.querySelector("#numbers").value;
  // Use the /,\s*/g regex to split the value string by commas. You can tweak it based on the number of spaces separating your values. Store the array in an array variable.
  // const array = value.split(/,\s*/g);
  // Create a numbers variable and assign it the value of array.map(). Remember that .map() creates a new array, instead of mutating the original array.
  // Add a callback function to your .map() method that converts each element to a number. You can use the Number() function to do this.
  // Add a callback function to your .filter() method that returns true if the element is not NaN.

  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));
};
