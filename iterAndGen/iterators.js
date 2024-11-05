// custom implementation of iterator

const iter={
    count:1,
    next:function(){
        if(this.count<=10){
            return{
                value:this.count++,
                done:false
            }
        }
        else{
            return{
                value:undefined,
                done:true
            }
        }
    }
}
let result=iter.next()
while(!result.done){
    console.log(result);
    result=iter.next()
}
console.log(iter.next());



// Array

let a=[1,2,3];
let arrayIter=a[Symbol.iterator]();
console.log(arrayIter.next());
console.log(arrayIter.next());
console.log(arrayIter.next());
console.log(arrayIter.next());
console.log(arrayIter.next());
