const item_P = 
{
    "Espresso": 45,
    "Latte": 65,
    "Croissant": 40
}

const order = [];


document.getElementById("btn_add").addEventListener("click",function()
{
    const selected_value = document.getElementById("menu").value;

    const create_li = document.createElement("li");
    create_li.textContent = selected_value;
    create_li.id = selected_value;


    const create_D = document.createElement("button");
    create_D.type = "button";
    create_D.textContent = "delete";

    const create_Q = document.createElement("input");
    create_Q.type = "number";
    create_Q.className = Math.min(selected_value,10);
    create_Q.value = 1;

    create_Q.addEventListener("input", function () {

    if (create_Q.value > 10)
    {
        create_Q.value = 10;
    } 
    else if (create_Q.value < 1 && create_Q.value !== "")
    {
        create_Q.value = 1;
    }
    });


    create_D.addEventListener("click" , function()
    {
        create_li.remove();

        const index = order.indexOf(selected_value);
        if (index !== -1)
        {
            order.splice(index, 1);
        }
    });

    
    if(order.includes(selected_value) || selected_value === "Menu")
    {
        
    }
    else
    {
        document.getElementById("pre_order").appendChild(create_li);

        create_li.appendChild(create_Q);

        create_li.appendChild(create_D);

        order.push(selected_value);

        document.getElementById("menu").selectedIndex = 0;
    }

})

document.getElementById("btn_cal").addEventListener("click", function()
{
    let total =0;

    const items = document.querySelectorAll("#pre_order li");

    const customer = document.getElementById("name").value.trim();

    const phone_R = /^01\d{9}$/;
    const phone_C = document.getElementById("Phone").value.trim();

    

    if(customer.length < 3)
    {
        document.getElementById("error").textContent = "your name should be at least 3 charchters";
    }
    else
    {
        if(!phone_R.test(phone_C) || phone_C.value === "")
        {
            document.getElementById("error").textContent = "there is wrong with your number";
        }
        else
        {
            if(order.length === 0)
            {
                document.getElementById("error").textContent = "there is no item to order";
            }
            else
            {
                items.forEach((li) => 
                {
                    const item_id = li.id;

                    const input_Q = li.querySelector("input");
                    const quantity = Number(input_Q.value) || 0;

                    const price = item_P[item_id];

                    const item_T = quantity * price;

                    const create_li = document.createElement("li");
                    create_li.textContent = `${item_id} : ${quantity} * ${price} = ${item_T}`
                    document.getElementById("item_D").appendChild(create_li);
                    
                    total +=item_T;
                })
                document.getElementById("btn_cal").disabled = true;

                document.getElementById("error").textContent = "";
                document.getElementById("name_D").textContent = `Customer Name : ${document.getElementById("name").value.trim()}`;
                document.getElementById("phone_D").textContent = `Customer Phone : ${document.getElementById("Phone").value.trim()}`;
                if(total > 200)
                {
                    document.getElementById("deliviry_F").textContent = `deliviry = free deliviry`;
                    document.getElementById("Total").textContent = `Total = ${total}`;
                    console.log(total);
                }
                else
                {   
                    document.getElementById("deliviry_F").textContent = `deliviry = 50`;
                    document.getElementById("Total").textContent = `Total = ${total + 50}`;
                    console.log(total);
                }
                document.getElementById("msg").textContent = "have fun with your order (you can order again if you want to tast another thing)";
                
                document.getElementById("name").value = "";
                document.getElementById("Phone").value = "";
                document.getElementById("pre_order").innerHTML = "";

                
            }
           
        }
    }







    
    
    
       

})