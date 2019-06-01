// Object property shorthand

const name = 'Bill';
const userAge = 27;

const user = {
    //name:name,
    name,
    //age:userAge,
    userAge,
    location: 'Nairobi'
}

//console.log(user);

//Object destructuring

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}
// const label = product.label;
// const price = product.price;
// const stock = product.stock;
// const salePrice = product.salePrice;

// const {label:productLabel,stock,price} = product;
// console.log(productLabel);
// console.log(price);

const transaction = (type,{label,stock})=>{
console.log(type,label,stock);
}

transaction('purchase',product);
