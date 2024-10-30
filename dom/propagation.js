//event listener phase --> bubble and capture

document.querySelector("#grand").addEventListener('click',()=>{
    console.log("grandparent clicked..!");
},true);

document.querySelector("#parent").addEventListener('click',(e)=>{
    console.log("parent clicked..!");
    e.stopPropagation();
},true);

document.querySelector("#child").addEventListener('click',()=>{
    console.log("child clicked..!");
},true);

// document.querySelector("#grand").addEventListener('click',()=>{
//     console.log("grandparent clicked..!");
// },false);

// document.querySelector("#parent").addEventListener('click',()=>{
//     console.log("parent clicked..!");
// },false);

// document.querySelector("#child").addEventListener('click',()=>{
//     console.log("child clicked..!");
// },false);

