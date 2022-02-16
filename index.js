const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.json("Home page")
})
app.get("/about", (req, res) => {
    res.json("about page")
})

app.get("/contact-us", (req, res) => {
    res.json("about page")
})

app.listen(3000, () => console.log("Server is running on port 3000"))