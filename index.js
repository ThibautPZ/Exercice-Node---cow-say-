const student = require("./information.js");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `${student.name}, campus ${student.campus} : I fail to comprehend the benefits of such a module`,
    e: "--'",
    T: "♥",
  })
);
