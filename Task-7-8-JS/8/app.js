const team =
{ 
name: "Egypt", 
coach: { name: "Hossam Hassan", nationality: "Egyptian" }, 
stadium: { name: "Cairo Stadium", city: "Cairo", capacity: 75000 }, 
colors: ["red", "white", "black"], 
founded: 1921, 
};

const players =
[ 
{ id: 1, name: "Salah", number: 10, position: "Forward", age: 34, goals: 20, assists: 10 }, 
{ id: 2, name: "Marmoush", number: 7, position: "Forward", age: 27, goals: 15, assists: 6 }, 
{ id: 3, name: "Trezeguet", number: 11, position: "Winger", age: 31, goals: 9, assists: 8 }, 
{ id: 4, name: "Zizo", number: 25, position: "Midfielder", age: 30, goals: 6, assists: 11 }, 
{ id: 5, name: "Emam Ashour", number: 8, position: "Midfielder", age: 28, goals: 5, assists: 7 }, 
{ id: 6, name: "El Shenawy", number: 1, position: "Goalkeeper", age: 37, goals: 0, assists: 0 },
];

const matches =
[ 
{ opponent: "Ghana", score: [2, 0], goals: ["Salah", "Marmoush"] }, 
{ opponent: "Morocco", score: [1, 1], goals: ["Trezeguet"] }, 
{ opponent: "Senegal", score: [3, 2], goals: ["Salah", "Zizo", "Salah"] }, 
];

const bench = ["Hamdi Fathy", "Mostafa Fathi", "Akram Tawfik"]; 
const settings = { theme: "light", language: "ar", notifications: true };


const name_founded = team.name +" "+ team.founded;

const coachName =team.coach.name;

const city_capacity = team.stadium.city +" " + team.stadium.capacity;

const first_sec_color = team.colors[0] + " " +team.colors[1];

const third_color = team.colors[team.colors.length - 1];

team.nickname = team.nickname ?? "The Pharaohs";

const first_p_goals = players[0].name + " " + players[0].goals;

const [first_P,...others] = players;

const first_M = matches[0].opponent + " " + matches[0].score;

matches.forEach((scores) =>
{
    const egypt_S = scores.score[0];
    const opp_S = scores.score[1];

    console.log(`${team.name} ${egypt_S} - ${opp_S} ${scores.opponent}`);
});

players.forEach((scan) => 
{
    const P_num = scan.number
    const P_name = scan.name;
    const P_pos = scan.position;

    console.log(`#${P_num} ${P_name} -- ${P_pos}`);
});

const P_map = players.map(player => player.name);

function printPlayerr({ name, age, position })
{
    console.log(`${name} ${age} ${position}`);
}

players.forEach(printPlayerr);

function describe({ name, position = "Unknown"})
{
    console.log(`Player: ${name}, Position: ${position}`);
}

describe({ name: "New Player" });

const allPlayers = [...players.map(player => player.name) , ...bench];

console.log(allPlayers);

const newColors = [...team.colors, "gold"];
console.log(newColors);

const copy_S = 
{
    ...settings,theme: "dark"
};
console.log(settings);
console.log(copy_S);



const copy_T = 
{
    ...team,founded: 1920
};
console.log(team);
console.log(copy_T);

const star =
{
    ...players[0] , captain: true
};

const copy_P =
{
    ...players[1] , goals: players[1].goals + 1
};

const { notifications , ...basic } = settings;

const { id , ...info } = players[0];


function sum (...numbers)
{
    let num_T = 0;
    for (const num of numbers)
    {
        num_T += num;
    }
    return num_T;
}

const Goals = players.map(player => player.goals);

console.log(sum(...Goals));

function maxGoals(...numbers)
{
    return Math.max(...numbers);
}

const max_G = players.map(player => player.goals);

console.log(maxGoals(...max_G));

const highest_age = Math.max(...players.map(player => player.age));

function addPlayers(team, ...name)
{
    const add_P =players.map(player => player.name);
    return [...add_P]
}

console.log(addPlayers());

const copy = team;
copy.name = "Ghana";
console.log(team.name);

const copy2 = {...team};
copy2.stadium.city = "Giza";
console.log(team.stadium.city);

const copy_2 = structuredClone(team);
copy_2.stadium.city = "Giza";
console.log(team.stadium.city);


// 1 = true / 2 = false
console.log(players[0] === players[0]); 
// console.log({} === {});                


function age_P(player)
{
    return {...player, age : player.age + 1};
}


let salah_G = 0;

for (const match of matches)
{
    for (const score of match.goals)
    {
        if (score === "Salah")
        {
            salah_G++;
        }
    }
}
console.log(salah_G);

const W_D_L = {wins: 0, draws: 0, losses: 0};

matches.forEach(({score : [egypt, opp]}) =>
{
    if (egypt > opp)
    {
        W_D_L.wins++;
    }
    else if (egypt === opp)
    {
        W_D_L.draws++;
    }
    else
    {
        W_D_L.losses++;
    }
});

console.log(W_D_L);