const secretNumber = 7; 
let attempts = 5;
let user_guess;
let random_number;
let guessing_number = secretNumber;

document.getElementById("attempts").textContent = attempts;

document.getElementById("help_div").style.display = "none";

function showMessage(message) 
{
    document.getElementById("message").textContent = message;
}

document.addEventListener("keydown", event => 
{
    if(event.key === "Enter")
    {
        checking();
    }

    if(event.key === "r" || event.key === "R")
    {
        resetGame();
    }

    if(event.key === " ")
    {
        random();
    }

    if(document.getElementById("help_div").style.display === "flex" && event.key === "Escape")
    {
        help();
    }
})

function checking()
{
    user_guess = document.getElementById("guessed").value;

    if(user_guess === "" )
    {
        showMessage("Enter a number");
    }
    else if(user_guess < 1 || user_guess > 10)
    {
        showMessage("Choose a number from 1 to 10");
    }
    else if(user_guess == guessing_number)
    {
        showMessage("Correct!");
        document.body.classList.add("win");
        document.getElementById("check_btn").disabled = true;
    }
    else if(user_guess > guessing_number)
    {
        attempts -=1;
        document.getElementById("attempts").textContent = attempts;
        showMessage("Too high");
    }
    else
    {
        attempts -=1;
        document.getElementById("attempts").textContent = attempts;
        showMessage("Too low");
    }

    if(attempts === 0)
    {
        showMessage("Game over");
        document.body.classList.add("lose");
        document.getElementById("check_btn").disabled = true;
    }
}

document.getElementById("check_btn").onclick = function()
{
    checking();
}

function resetGame()
{
    attempts = 5;
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("check_btn").disabled = false;
    document.getElementById("guessed").value = "";
    showMessage("");
    document.body.classList.remove("lose");
    document.body.classList.remove("win");

    if(document.getElementById("random").textContent != "wanna random?")
    {
        guessing_number = createSecretNumber(1,10);
        console.log(guessing_number);

    }
}

document.getElementById("reset_btn").addEventListener("click",resetGame)

function random()
{
     if(document.getElementById("random").textContent == "wanna random?")
    {
        document.getElementById("number_type").textContent = "random number";
        document.getElementById("random").textContent = "too hard ?";
        resetGame();
    }
    else
    {
        document.getElementById("number_type").textContent = "static number";
        document.getElementById("random").textContent = "wanna random?";
        resetGame();
        guessing_number = secretNumber;
    }
}

document.getElementById("random").onclick = function()
{
    random();
}

function createSecretNumber(min,max)
{
    random_number = Math.floor(Math.random() * (max - min + 1)) +min ;
    return random_number;
}

function help()
{
    if(document.getElementById("help_div").style.display === "none")
    {
        document.getElementById("main_div").style.display = "none";
        document.getElementById("btn-d").style.display = "none";
        document.getElementById("help_div").style.display = "flex";
    }
    else
    {
        document.getElementById("help_div").style.display = "none";
        document.getElementById("main_div").style.display = "flex";
        document.getElementById("btn-d").style.display = "flex";
    }
}

document.getElementById("help").onclick = function()
{
    help();
}

document.getElementById("close").onclick = function()
{
    help();
}