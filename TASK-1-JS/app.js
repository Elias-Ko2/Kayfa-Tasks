let customer = " Sara ";
const book = "JavaScript Baisics";
let price = 150;
let quantity = "3";
let shipping = 15;



// cleaning name
console.log(`
    original name : ${customer}
    cleaned name : ${customer.trim()}`);



// change type
const numeric = Number(quantity);
console.log(`
    quantity : ${quantity} ${typeof quantity}
    quantity : ${numeric} ${typeof numeric} `);


// Calculate without shipping 
// نعتبر ان مافي تحويل بالكود يلي فوق 
// و للاحتياط نحول العدد الى رقم 
// مع انو عم نستخدم عملية ضرب و جافا سكريبت لحالها يتحول النص لرقم بهي الحالة
const numeric_quantity = Number(quantity);
const subtotal = price * numeric_quantity;
// expacting 450
console.log(subtotal);
// Calculate with shipping
const sh_subtotal = subtotal + shipping;
// expacting 465 
console.log(sh_subtotal);


// receipt
console.log(`
    name : ${customer.trim()}
    book : ${book}
    price : ${price}
    quantity : ${numeric}
    subtotal : ${subtotal}
    shipping : ${shipping}
    total : ${sh_subtotal.toFixed(2)}`);
