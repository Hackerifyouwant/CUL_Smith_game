const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/game1.html");
    // var timeoutID = setTimeout(function() {
    //     res.send("<script> alert('hint 1 2 3'); window.location.href = '/';</script>");
    // }, 3000); // 600000
})
app.post("/hint", function(req, res) {
    console.log(req.body);
})

app.get("/loaderio-f4a071a41b7bd3fa072927588cc6d895.txt", function(req, res) {
    res.sendFile(__dirname + "/loaderio-f4a071a41b7bd3fa072927588cc6d895.txt")
})

app.post("/", function(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    if (email === "admin@email.com" && password === "welcome_to_cul") {
        res.sendFile(__dirname + "/server.html")
    } else {
        res.sendFile(__dirname + "/failure.html");
    }
});

app.post("/failure", function(req, res) {
    res.redirect("/");
})

app.get("/i_love_coding", function(req, res) {
    res.cookie("I am password", "w_r_akreaehce");
    res.sendFile(__dirname + "/game2.html");

})

app.get("/fuck_my_life", function(req, res) {
    res.send("<center><img height=800px weight=800px src='image/fuck_my_life.png'></center>")

})

app.get("/where_is_my_love", function(req, res) {
    res.send("<center><img height=800px weight=800px src='image/where_is_my_love.png'></center>")
})

app.get("/help_me_please", function(req, res) {
    res.send("<center><img height=800px weight=800px src='image/help_me_please.png'></center>")
})

app.get("/mess", function(req, res) {
    res.send("<center><img height=800px weight=800px src='image/mess.png'></center>")
})

app.get("/please_give_me_more_bug", function(req, res) {
    res.send("<center><img height=800px weight=800px src='image/please_give_me_more_bug.png'></center>")
})

app.get("/robots.txt", function(req, res) {
    res.sendFile(__dirname + "/robots.html");
})

app.post("/password_submit", function(req, res) {
    const password = req.body.password;
    console.log(password);
    if (password === "we_are_hacker") {
        res.sendFile(__dirname + "/congratulations.html")
    } else {
        res.send("<script> alert('Wrong password'); window.location.href = '/i_love_coding';</script>");
    }
})

app.get("/never_gonna_give_you_up", function(req, res) {
    res.cookie("hint", "robots.txt");
    res.send('<center><video width="960" height="720"  controls><source src="/video/HaHa.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video></center> <!-- 去找找看cookie --><!-- hint : application->cookie or storage->cookie --> <!-- 可以注意一下網址的變化 -->');
})

app.get("/So_cute", function(req, res) {
    res.cookie("hint", "robots.txt");
    res.send('<center><video width="960" height="720"  controls><source src="/video/bubu.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video></center> <!-- 去找找看cookie --><!-- hint : application->cookie or storage->cookie  --> <!-- 可以注意一下網址的變化 -->');
})


app.listen(process.env.PORT || 8080, function(req, res) {
    console.log("Server is running on port 8080");
})


function Hint(req, res) {}