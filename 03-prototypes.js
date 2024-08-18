// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

//getAge
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Revise / Change Year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};
0;
// Instantiate an Object
const book1 = new Book("Book One", "Nidhish Reddy", "2013");
const book2 = new Book("Book Two", "Nidhish Reddy", "2016");

console.log(book1);
console.log(book2);
console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book1.getAge());
console.log(book2.getAge());
book2.revise("2018");
console.log(book2);
console.log(book2.getSummary());
console.log(book2.getAge());
