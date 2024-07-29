const express = require("express");
const {mean, median, mode} = require("./math_functions");
const ExpressError = require("./express_error");
const app = express();


app.use(express.urlencoded({extended: true}));

app.get("/mean", (req, res) => {
    if (!req.query.nums)
        throw new ExpressError("nums are required.");

    let arr = req.query.nums.split(",")

    let result = String(mean(arr));
    console.log(result);
    if (result == String(NaN))
        return res.status(400).send(result);
    return res.send(result);
} )
app.get("/median", (req, res) => {
    if (!req.query.nums)
        throw new ExpressError("nums are required.");
    let arr = req.query.nums.split(",")
    
    let result = String(median(arr));
    console.log(result);
    if (result == String(NaN))
        return res.status(400).send(result);
    return res.send(result);
} )
app.get("/mode", (req, res) => {
    if (!req.query.nums)
        throw new ExpressError("nums are required.");
    let arr = req.query.nums.split(",")
    
    let result = String(mode(arr));
    console.log(result);
    if (result == String(NaN))
        return res.status(400).send(result);
    return res.send(result);
} )

app.listen(5000, function() {
    console.log("Server started on port 5000")
})
