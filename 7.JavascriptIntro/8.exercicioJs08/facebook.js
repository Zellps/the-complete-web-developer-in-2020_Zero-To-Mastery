//facebook

// user

var database = [{
    username: "zell",
    password: "xucrute"
}]



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

var userNamePrompt = prompt("Qual o seu username?")
var passwordPrompt = prompt("Qual a sua senha?")

function signIn(user, pass) {
    if ( user === database[0].username && pass === database[0].password) {
        console.log(newsFeed)
    } else {
        alert ("Login ou senha incorretos")
    }
}

signIn(userNamePrompt,passwordPrompt)