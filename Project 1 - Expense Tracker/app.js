let Expenses = 
[
  {
    id: 1,
    description: "Weekly Grocery",
    amount: 75.5,
    category: "Food",
    date: "Nov 3, 2026"
  },
  {
    id: 2,
    description: "Internet Bill",
    amount: 40.0,
    category: "Bills",
    date: "Nov 6, 2026"
  },
  {
    id: 3,
    description: "Gas Fuel",
    amount: 55.0,
    category: "Transport",
    date: "Nov 9, 2026"
  },
  {
    id: 4,
    description: "Movie Ticket",
    amount: 15.0,
    category: "Entertainment",
    date: "Nov 10, 2026"
  },
  {
    id: 5,
    description: "Book Store",
    amount: 32.25,
    category: "Other",
    date: "Nov 11, 2026"
  }
];

const Category =
[
  "All","Food","Bills","Transport","Entertainment","Other"
]

for (let cat of Category)
{
  const opt = document.createElement("option");
  opt.textContent = cat;

  document.getElementById("category").appendChild(opt);
}


const cat_filter = document.getElementById("category");
const tbody = document.getElementById("info");
const Msg = document.getElementById("msg");
const Form = document.getElementById("Form");



////////////// filter //////////////
function filtered()
{
  if (cat_filter.value === "All")
  {
    return Expenses;
  }
  return Expenses.filter(fil => fil.category === cat_filter.value);
}

////////////// filter //////////////



document.getElementById("MB").addEventListener("input", () => 
{
  render(filtered());
})



render();

function render(data = Expenses)
{
  let Total = 0;
  let biggest = 0;
  let counter = data.length;
  let month_B = document.getElementById("MB").value;

  ////////////// cards //////////////
  for (let cal of data)
  {
      Total += cal.amount;

    if(Number(cal.amount) > biggest)
    {
      biggest = cal.amount;
    }
  } 

  if (month_B < Total)
  {
    document.getElementById("total_C").style.borderColor ="red";
    document.getElementById("total_spend").style.color ="red";
  }
  else
  {
    document.getElementById("total_C").style.borderColor ="green";
    document.getElementById("total_spend").style.color ="green";
  }

  document.getElementById("total_spend").textContent = Total.toFixed(2);
  document.getElementById("biggest").textContent = biggest;
  ////////////// cards //////////////
  ///////////////////////////////////
  ////////////// table //////////////
  if(counter === 0)
  {
    document.getElementById("table").style.display = "none";
    document.getElementById("counter").textContent = counter;
    Msg.style.display = "block";
  }
  else
  {
    document.getElementById("counter").textContent = counter;
    document.getElementById("table").style.display = "";
    Msg.style.display = "none";
    tbody.innerHTML = ""



    data.forEach(exp =>
    {
      const TR = document.createElement("tr");

      TR.innerHTML = 
      ` 
        <th scope="row">${exp.id}</th>
        <td>${exp.description}</td>
        <td>${exp.amount}</td>
        <td>${exp.category}</td>
        <td>${exp.date}</td>
        <td></td>
      `
      tbody.appendChild(TR);


      const delete_btn = document.createElement("button");
      delete_btn.id = exp.id;
      delete_btn.textContent = "Delete";
      delete_btn.className ="btn-outline theme-secondary input-group-btn";
      delete_btn.addEventListener("click", () =>
      {
        Delete_b(delete_btn);
      })
      TR.querySelector("td:last-child").appendChild(delete_btn);
    })
  }
  ////////////// table //////////////
}


////////////// delete //////////////
function Delete_b( delete_btn)
{

  const check = confirm("Are you sure you want to delete");

  if (!check)
  {
    return;
  }
  else
  {
    const index = Expenses.findIndex(item => item.id === Number(delete_btn.id));

    if (index !== -1)
    {
      Expenses.splice(index, 1)
        render(filtered());
    }
  }


 
}
////////////// delete //////////////
///////////////////////////////////
////////////// sort //////////////
let sort_amo_check;

const sort_amo_btn = document.getElementById("sort_amo_btn");

sort_amo_btn.addEventListener("click", () =>
{
  if (sort_amo_check)
  {
    Expenses.sort((a, b) => Number(a.amount) - Number(b.amount));
  }
  else
  {
    Expenses.sort((a, b) => Number(b.amount) - Number(a.amount));
  }

  sort_amo_check = !sort_amo_check;
  render(filtered());
})


let sort_id_check;

const sort_id_btn = document.getElementById("sort_id_btn");

sort_id_btn.addEventListener("click", () => 
{
  if (sort_id_check)
  {
    Expenses.sort((a, b) => Number(a.id) - Number(b.id));
  }
  else
  {
    Expenses.sort((a, b) => Number(b.id) - Number(a.id));
  }

  sort_id_check = !sort_id_check;
  render(filtered());
})
////////////// sort //////////////
/////////////////////////////////
///////////// filter ///////////

cat_filter.addEventListener("change", () =>
{
  render(filtered());
})
////////////// filter ////////////

document.getElementById("txt_msg").style.display = "none";
document.getElementById("amount_msg").style.display = "none";
document.getElementById("cat_msg").style.display = "none";
document.getElementById("date_msg").style.display = "none";

Form.addEventListener("submit", (e) =>
{
  e.preventDefault();

  const Des = document.getElementById("Desc").value.trim();
  const Amo = Number(document.getElementById("Amo").value);
  const Cat = document.getElementById("inputGroupSelect01").value;
  const Datee = document.getElementById("datepickerIconStart").value;









  if (Des.length < 3)
  {
    document.getElementById("Desc").style.borderColor = "red"
    document.getElementById("txt_msg").style.display = "flex";
  }
  else
  {
    document.getElementById("Desc").style.borderColor = "var(--bs-border-color)"
    document.getElementById("txt_msg").style.display = "none";

    if (Amo === 0 || Amo === "")
    {
      document.getElementById("Amo").style.borderColor = "red"
      document.getElementById("amount_msg").style.display = "flex";
    }
    else
    {
      document.getElementById("Amo").style.borderColor = "var(--bs-border-color)"
      document.getElementById("amount_msg").style.display = "none";

      if( Cat === "Choose...")
      {
        document.getElementById("inputGroupSelect01").style.borderColor = "red"
        document.getElementById("cat_msg").style.display = "flex";
      }
      else
      {
        document.getElementById("inputGroupSelect01").style.borderColor = "var(--bs-border-color)"
        document.getElementById("cat_msg").style.display = "none";

        if ( Datee === "")
        {
          document.getElementById("date_S").style.borderColor = "red"
          document.getElementById("date_msg").style.display = "flex";
        }
        else
        {
          document.getElementById("date_S").style.borderColor = "var(--bs-border-color)"
          document.getElementById("date_msg").style.display = "none";


          const reShape = Datee.trim().split("/");

          const month = reShape[0].padStart(2, "0");
          const day = reShape[1].padStart(2, "0");
          const year = reShape[2];

          const new_D = new Date(year, Number(month) -1, Number(day));

          const ReDate = new_D.toLocaleDateString("en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric"
          });







          let last_id = 0 ;

          for ( let L_id of Expenses)
          {
            if (L_id.id > last_id)
            {
              last_id = L_id.id ;
            }
          }

          last_id += 1 ;

          Expenses.push
          ({

            id: last_id,
            description: Des,
            amount: Amo,
            category: Cat,
            date: ReDate
          })

          render(filtered());








        }
      }
    }
  }
})


