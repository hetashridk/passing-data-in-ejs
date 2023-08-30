import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("index.ejs");
})

app.post("/submit", function (req, res) {
    const numletters = req.body["firstName"].length + req.body["lastName"].length;
    // console.log(numberOfLetters);
    res.render("index.ejs", { numberOfLetters: numletters });
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})