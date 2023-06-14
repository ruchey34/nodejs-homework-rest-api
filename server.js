const mongoose = require("mongoose");
const app = require("./app");

const DB_URI='mongodb+srv://shora:QWEasdzx30@cluster0.3aszojj.mongodb.net/db-contacts?retryWrites=true&w=majority';
const PORT= 3000;

mongoose.set("strictQuery", true);

mongoose.connect(DB_URI)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch(error => {
    console.log(error.message)
    process.exit(1);
  });