function createOrder(item,callback){
    setTimeout(()=>{
        console.log("order created "+item);
        callback(item);
    },2000)
}

function proceedToPayment(item,callback){
    setTimeout(()=>{
        console.log("payment successfull for order "+item);
        callback(item);
    },1000)
}

function showSummary(item,callback){
    setTimeout(()=>{
        console.log("summary for order "+item);
        callback(item);
    },1000)
}

function updateWallet(item){
    setTimeout(()=>{
        console.log("updated Wallet for order "+item);
    },1000)
}


// Execution
createOrder('electronics',(order)=>{
    proceedToPayment(order,(paidOrder)=>{
        showSummary(paidOrder,(summary)=>{
            updateWallet(summary);
        })
    })
})