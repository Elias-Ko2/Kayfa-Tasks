const ageInput = "20"; 
const hasTicket = true; 
const isMember = false; 
const ticketType = "vip"; 
const availableSeats = 5; 


const age = Number(ageInput);

const isAdualt = (age >= 18);

console.log
(`
age : ${age}
type of age : ${typeof age}
is Adualt : ${isAdualt}
`);




// Decide if the User Can Enter //

let canEnter = false;
if(age >= 18 && hasTicket == true && availableSeats >= 1)
{
    canEnter = true;
    console.log("Access granted"); 
}
else
{
    console.log("Access denied"); 
}



// Ticket Price //

let ticketPrice;
let Has_ticket = "no";
if(canEnter == true)
{
    if(ticketType == "regular")
    {
        ticketPrice = 200;
    }
    else if (ticketType == "vip")
    {
        ticketPrice = 500;
    }
    else if(ticketType == "student")
    {
        ticketPrice = 150;
    }
    
    if(ticketPrice > 0)
    {
        console.log(`ticket Price : ${ticketPrice}`);
        Has_ticket = "yes";
    }
    else
    {
        console.log("Unknown ticket type");
    }
}



// Member Discount //
// اذا في نوع تيكت بيتأكد من الخصم
// أو ما بأطهر شي لأن اساسا في خطا بنوع التيكت


let finalPrice;
if(ticketPrice >0)
{
    if(isMember == true)
    {
        finalPrice = ticketPrice - 50;
        if(finalPrice >=0)
        {
            console.log(`final price : ${finalPrice}`);
        }
        else
        {
            console.log("sorry there is an error")
        }
    }
    else
    {
        console.log("you are not a member")
        finalPrice = ticketPrice;
    }
}

console.log("------------------------------")

console.log
(`
Age : ${age}
Adualt : ${isAdualt}    
Has ticket : ${Has_ticket}
Available seats : ${availableSeats}
Can enter : ${canEnter}
Ticket type : ${ticketType}
Member : ${isMember}
Final price : ${finalPrice}
`)


// const acceptedTerms = "false"; 
// if (acceptedTerms) { 
// console.log("Terms accepted"); 
// } else { 
// console.log("Terms not accepted"); 
// }


let AcceptedTerms = true;

if (AcceptedTerms == true) { 
console.log("Terms accepted"); 
} else { 
console.log("Terms not accepted"); 
}


// if you want to keep it string
let acceptedTerms = "false";

if (acceptedTerms == "true") { 
console.log("Terms accepted"); 
} else { 
console.log("Terms not accepted"); 
}

