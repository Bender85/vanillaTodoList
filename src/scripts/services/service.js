let myToDoList = [
  "buy cat & dog food",
  "check my emailBox",
  "go to the supermarket",
  "go to the cinema",
  "go to the concert",
  "go to my friends",
  "do my homework",
  "clean my room",
  "read fartasy book",
  "do my sport exercise"
];
let SetData = arr => {
  // set some list for autocomplete to store
  localStorage.setItem("myToDoList", JSON.stringify(arr));
};
// get
SetData(myToDoList);
let getData = () => {
  return JSON.parse(localStorage.getItem("myToDoList"));
};
export default getData;
