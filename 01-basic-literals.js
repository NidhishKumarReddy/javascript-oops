const book1 = {
  title: "Book One",
  author: "Nidhish Reddy",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

const book2 = {
  title: "Book Two",
  author: "Nidhish Reddy",
  year: "2016",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(Object.keys(book1));
console.log(Object.values(book1));
console.log(Object.keys(book2));
console.log(Object.values(book2));
