// a=[1,2,3,4,5];
// {
//     const name="sano"
// }
// name


char=['a','b','r','r','q','b','a','g'];
let a={};
char.forEach((val, idx, char) => {
    console.log(val +" -> "+ idx);
    
});

char.forEach((ele) => {
    a[ele]=(a[ele]|0)+1;   
});
// {
//      x=10;
// }
// x

let sum=0;
let odd=[];
let even=[];
let num=[1,3,2,4,6,3,43]
num.forEach((n)=>{
    sum+=n;
})
sum

even= num.filter(e => e%2==0);
odd= num.filter(e => e%2!=0);
even
odd


let x=[1,2,3,4,5,6,7,8]

x.splice(0,3,1,2,3,4,5);
x
x.reverse();
x

let product = [
    {
        name:"lap",
        price:10000,
        count:2
    },
    {
        name:"mobile",
        price:20000,
        count:13
    },
    {
        name:"watch",
        price:1000,
        count:200
    }  
    
];

pro=product.filter((e)=>e.count>10 && e.price>=1000).sort((a,b)=>(a.price-b.price));
pro

product.sort((a,b)=> a.price-b.price)
product

function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      console.log(i);  // a prime
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }

  showPrimes(12);



  let sayHi = function() {
    return ( "Hello" );
  };

  sayHi;