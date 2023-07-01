const fs = require("fs");

const content = "Now is the winter of our discontent";

fs.writeFile("newFile.txt", content, (err) => {
  if (err) console.log(err);
  console.log("File Created and updated");
});
