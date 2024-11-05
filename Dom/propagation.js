//event listener phase --> bubble and capture

document.querySelector("#grand").addEventListener('click',()=>{
    console.log("grandparent clicked..!");
});
 
document.querySelector("#parent").addEventListener('click',(e)=>{
    console.log("parent clicked..!");
    e.stopPropagation();
});

document.querySelector("#child").addEventListener('click',()=>{
    console.log("child clicked..!");
});

// document.querySelector("#grand").addEventListener('click',()=>{
//     console.log("grandparent clicked..!");
// },false);

// document.querySelector("#parent").addEventListener('click',()=>{
//     console.log("parent clicked..!");
// },false);

// document.querySelector("#child").addEventListener('click',()=>{
//     console.log("child clicked..!");
// },false);


const cartDiv = document.getElementById('cart');
const button = document.getElementById('addToCartButton');

// Event listener for the parent div
cartDiv.addEventListener('click', () => {
  console.log('Cart updated!');
});

// Event listener for the button
button.addEventListener('click', (event) => {
//   event.stopPropagation(); // Optional: Prevent bubbling if you want to stop it
  console.log('Item added to cart!');
});
