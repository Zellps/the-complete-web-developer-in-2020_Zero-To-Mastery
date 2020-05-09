//facebook

// user

var database = [{
    username: "zell",
    password: "xucrute"
},
{
    username: "tifa",
    password: "1234"
},
{
    username: "barret",
    password: "1443"
}
]



//newsfeed
var newsFeed = [{
    username: "squall",
    timeline: "sql123"
},
{
    username: "seifer",
    timeline: "sfr123"
},
{
    username: "rinoa",
    timeline: "rna123"
}
]


function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        } else {
        }
    } return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed)
    } else {
        alert("Login ou senha inválidos!")
    }
}


var userNamePrompt = prompt("Qual o seu username?")
var passwordPrompt = prompt("Qual a sua senha?")

signIn(userNamePrompt, passwordPrompt)