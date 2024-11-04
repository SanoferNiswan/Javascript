// manual implementation of iterator

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
