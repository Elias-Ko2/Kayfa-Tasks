const products = [
{ id: 1, name: 'Laptop', category: 'electronics', price: 25000,
stock: 4 },
{ id: 2, name: 'Mouse', category: 'electronics', price: 350, stock:
0 },
{ id: 3, name: 'T-Shirt', category: 'clothes', price: 400, stock:
12 },
{ id: 4, name: 'Jacket', category: 'clothes', price: 1800, stock:
2 },
{ id: 5, name: 'Rice 5kg', category: 'food', price: 220, stock:
30 },
{ id: 6, name: 'Coffee', category: 'food', price: 300, stock: 0 },
{ id: 7, name: 'Headphones', category: 'electronics', price: 1500,
stock: 7 },
{ id: 8, name: 'Shoes', category: 'clothes', price: 2200, stock:
5 },
];


let new_product = products.map(prod => ({...prod}));


const prod_List = document.getElementById('prod_list');
const count = document.getElementById('count');
const total = document.getElementById('total');
const statuss = document.getElementById('status');


const btn_All = document.getElementById('btn_all');
const btn_InStock = document.getElementById('btn_instock');
const btn_Cheap = document.getElementById('btn_cheap');
const btn_Expensive = document.getElementById('btn_expensive');
const btn_Sort = document.getElementById('btn_sort');
const btn_Discount = document.getElementById('btn_discount');
const btn_Reset = document.getElementById('btn_reset');



function show_prod(list)
{
    prod_List.innerHTML = "";

    list.forEach (product =>
    {
        const create_li = document.createElement("li");
        create_li.textContent = `${product.id} - ${product.name} - ${product.price} EGP - stock : ${product.stock}`;

        if (product.stock === 0)
        {
            create_li.style.color = "red";
        }

        const btn_add = document.createElement("button");
        btn_add.textContent = "+1";
        btn_add.addEventListener("click", () =>
        {
            product.stock += 1;
            show_prod(new_product);
        })
        
        const btn_sell = document.createElement("button");
        btn_sell.textContent = "sell";
        btn_sell.addEventListener("click", () =>
        {
            if (product.stock > 0)
            {
                product.stock -= 1;
                show_prod(new_product);
            }
        })

        const btn_remove  = document.createElement("button");
        btn_remove.textContent = "remove";
        btn_remove.addEventListener("click", () =>
        {
            const rem = confirm(`are you sure you wnat to remove ${product.name}?`);

            if (rem)
            {
                new_product = new_product.filter(item => item.id !== product.id);
                show_prod(new_product);
            }
        })

        prod_List.appendChild(create_li);
        
        create_li.appendChild(btn_add);
        create_li.appendChild(btn_sell);
        create_li.appendChild(btn_remove);
    })

    count.textContent = list.length;

    let totalValue = 0;

    for (const product of list)
    {
        totalValue += product.price * product.stock;
    }

    total.textContent = `${totalValue} EGP`;

    if (list.length === 0)
    {
        statuss.textContent = "No Products";
    }
    else if (list.every(product => product.stock > 0))
    {
        statuss.textContent = "Everything is in stock"
    }
    else
    {
        statuss.textContent = "Some product are out of stock";
    }
}

show_prod(new_product);


btn_All.addEventListener("click", () => 
{
    show_prod(new_product);
})

btn_InStock.addEventListener("click", () =>
{
    const instock = new_product.filter(product => product.stock > 0);
    show_prod(instock);
})

btn_Cheap.addEventListener('click', () =>
{
  const cheap = new_product.filter(product => product.price <= 500);
  show_prod(cheap);
})

btn_Expensive.addEventListener('click', () =>
{
  const expensive = new_product.filter(product => product.price >= 2000);
  show_prod(expensive);
})

btn_Sort.addEventListener('click', () =>
{
  const sort = [...new_product].sort((a, b) => a.price - b.price);
  show_prod(sort);
})

btn_Discount.addEventListener("click",  () =>
{
    for (const product of new_product)
    {
        let new_price = Math.round(product.price * 0.9);

        if (new_price <  50) 
        {
            new_price = 50;
        }
        
        product.price = new_price;
    }

    show_prod(new_product);
})


btn_Reset.addEventListener("click", () =>
{
    new_product = products.map(product => ({...product}));
    show_prod(new_product);
})

const product_F = document.getElementById('product_f');
const input_Name = document.getElementById('name');
const input_Category = document.getElementById('category');
const input_Price = document.getElementById('price');
const input_Stock = document.getElementById('stock');
const error_Msg = document.getElementById('error');


product_F.addEventListener("submit", (e) => 
{
    e.preventDefault();

    error_Msg.textContent = "";

    const V_name = input_Name.value.trim();
    const V_catigory = input_Category.value;
    const V_price = Number(input_Price.value);
    const V_stock = Number(input_Stock.value);


    if (V_name.length < 3)
    {
        error_Msg.textContent = "your name must be more than 3 characters";
        return;
    }

    const is_prod = new_product.find(product => product.name.toLowerCase() === V_name.toLowerCase());

    if (is_prod)
    {
        error_Msg.textContent = `${is_prod.name} already exists (id ${is_prod.id})`
    }

    if (V_catigory === "")
    {
        error_Msg.textContent = "category must be chosen";
        return;
    }

    if  (input_Price.value === "" || input_Price.value <= 0)
    {
        error_Msg.textContent = "price must be a number more than 0";
        return;
    }

    if (input_Stock.value === "" || V_stock < 0 || V_stock > 1000)
    {
        error_Msg.textContent = "stock must be a number from 0 to 1000";
        return;
    }

    const new_id = new_product.length > 0 ? new_product[new_product.length -1].id +1 : 1;

    const new_p = 
    {
        id : new_id ,
        name : V_name ,
        category : V_catigory ,
        price : V_price ,
        stock : V_stock 
    };

    new_product.push(new_p);
    show_prod(new_product);
    product_F.reset();
})