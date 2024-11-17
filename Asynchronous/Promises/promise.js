const mypromise=new Promise((resolve,reject)=>{
    // let success=false;
    let success=true;
    var data={
        name:"sano", age:21
    }
    if(success){
        return resolve(data);
    }
    else{
        return reject("failure");
    }
})

mypromise.then((x)=>{
    console.log("resolved "+Response.json);
    
})
.catch((err)=>{
    console.error("rejected "+err);
    
})