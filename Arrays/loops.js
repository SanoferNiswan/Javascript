let list=[
    {text:'milk',cost:4,need:true},
    {text:'EGGS',cost:10,need:true},
    {text:'butter',cost:12,need:false},
    {text:'bread',cost:40,need:true},
    {text:'rice',cost:24,need:false},
]

let html='';
let tot=0;

// for loop

// for(let i=0;i<list.length;i++){
//     let item=list[i];
//     if(item.need){
//         html+=`<li>${item.text}</li>`;
//         tot+=item.cost;
//     }
// }


//while loop
let ind=0;
let item=list[ind];
while(item){
    if(item.need){
        html+=`<li>${item.text}</li>`;
        tot+=item.cost;
    }
    item=list[++ind];
}

// let li=document.getElementById("list");
// li.innerHTML=html;
// let cst=document.getElementById("cost").innerText+=tot;



// foreach loop

let num=[1,2,3,4];
num.forEach((item,indx,arr)=>{
    console.log(indx+":"+item);
    // console.log(arr);
    
})

let sum=0;
num.forEach((x)=>sum+=x);
console.log("Sum: "+sum);


const letters=['a','b','c','b','b','c','d'];
let count={};
letters.forEach((letter)=>{
    if(count[letter]){
        count[letter]=++count[letter];
    }
    else{
        count[letter]=1;
    }
})
console.log(count);

