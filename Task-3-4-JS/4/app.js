// Products //

const products =
[
    {
        id:1 ,
        name:"samsung" ,
        category:"samrt phone" ,
        price:1099 ,
        isStock: false
    },
    {
        id:2 ,
        name: "xiaomi" ,
        category:"samrt phone" ,
        price:500 ,
        isStock: true
    },
    {
        id:3 ,
        name:"asus" ,
        category:"laptop" ,
        price:1499 ,
        isStock: true
    },
    {
        id:4 ,
        name:"lenovo" ,
        category:"laptop" ,
        price:1299 ,
        isStock: false
    },
    {
        id:5 ,
        name: "LG",
        category:"TV" ,
        price:349 ,
        isStock: false
    },

];

console.log(products[0].name);
console.log(products[products.length -1].name);
console.log(products.length);

for(let i=0;i<products.length;i++)
{
    console.log(products[i].name)
}

console.log("-------------------------------------------------");

// Selected Filters //

const selectedCategories = new Set();

selectedCategories.add("smart phone");
selectedCategories.add("laptop");
selectedCategories.add("TV");

selectedCategories.add("TV");

console.log(selectedCategories);
console.log(selectedCategories.size);

console.log(selectedCategories.has("laptop"));


console.log("-------------------------------------------------");

// Current User //


const currentUser =
{
    id:1,
    name:"elias",
    email: "email@example.com",
    address: 
            {
                country:"syria",
                city:"damscus"
            }
}

console.log(currentUser.address.city);


console.log("-------------------------------------------------");

// Shopping Cart Quantities //


const cartQuantity = new Map();

cartQuantity.set(1,2);
cartQuantity.set(2,4);
cartQuantity.set(3,2);


console.log(cartQuantity.get(2));
console.log(cartQuantity.has(3));
console.log(cartQuantity.size);


console.log("-------------------------------------------------");

// Cart Total //

function calculateCartTotal(products,cartQuantity)
{
    let total=0;
    for(let i=0;i<products.length;i++)
    {
        let quantity = cartQuantity.get(products[i].id);

        if(quantity === undefined)
        {
            quantity =0;
        }
        total += products[i].price *quantity;
    }   
    return total;
}

console.log(calculateCartTotal(products, cartQuantity));