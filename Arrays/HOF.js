let num=[1,2,3,4];

let str=["sano","rose","riyaz"];

// 1 Foreach

num.forEach((x)=>{
    console.log(x);
    
})

str.forEach((x)=>{
    console.log(x);
    
})

// 2 Map

let double=num.map((x)=>x*2)
console.log(double);


// 3 filter

let even=num.filter((x)=>x%2==0)
console.log(even);
