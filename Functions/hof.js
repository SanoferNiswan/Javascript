// Higher order functions

a=[3,4,5,6,7,8];


// map function


// double : 6 8 10 12 14 16
// triple : 9 12 15 18 21 24
// binary : 011 100 101 110 111 1000

const double=a.map((x)=>x*2);
const triple=a.map((x)=>x*3);
const binary=a.map((x)=>x.toString(2)); // it returns binary num

console.log('DOUBLE: '+double+" triple:"+triple+"binary: "+binary);
 

// filter function

const odd=a.filter((x)=>x%2!=0);
const even=a.filter((x)=>x%2==0);
const great=a.filter((x)=>x>4);
console.log("odd:"+odd+"even:"+even+"greater 4 :"+great);


// reduce function ---> takes all element of array and produce single output

// sum , product, min, max

b=[2,3,1,5,4,7,6,9];

const sum=b.reduce(function(acc,curr){
    acc=acc+curr; // acc is like sum or result variable
    return acc;
},0)
console.log(sum);

const max=b.reduce((acc,curr)=>{
    acc=Math.max(curr,acc);
    return acc;
},b[0]);
console.log(max);



// real time example

const users=[
    {fname:"sanofer",lname:"niswan",age:20},
    {fname:"rosan",lname:"akthar",age:20},
    {fname:"mohamed",lname:"riyaz",age:24},
    {fname:"sulaiman",lname:"sait",age:40},
];

const fullname=users.map((user)=>user.fname+" "+user.lname);
console.log(fullname);

//{20:2,24:1,40:1} --> reduce

const ages=users.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});

console.log(ages);


// filter + map

const lessAge=users.filter((user)=>user.age<25);  // it returns all the objects 
console.log(lessAge);
const lessAgeFname=users.filter((user)=>user.age<25).map((x)=>x.fname);
console.log(lessAgeFname);


// same with reduce

const less=users.reduce((acc,curr)=>{
    if(curr.age<25){
        acc.push(curr.fname);
    }
    return acc;
},[])
console.log(less);
