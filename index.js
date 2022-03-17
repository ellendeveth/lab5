const express = require('express');
const mongoose = require('mongoose');
const logger = require("./middleware/logger"); //import / include met common js op basis van functies
const messagesRouter = require("./routers/messages");

mongoose.connect('mongodb://localhost:27017/chatapp');
const app = express();
const port = 3000;
app.set('view engine', 'pug');

app.use(express.json()); //json herkennen en bijvoegen op body
app.use("/api/v1/messages", messagesRouter); //alles wat je op deze route binnenkrijgt, handel dat af binnen de Router

app.get('/', (req, res) => {
  res.render("index", {title: "chat", message:"hello"});
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});