let count=0;
let getData=function(){
    console.log("fetching..."+ count++);
    
}

let debouncing=function(func,delay){
    let timer;
    return function(){
        let context=this;
        let args=arguments;
        clearTimeout(timer);
        timer=setTimeout(()=>{
            func.apply(context,args);
        },delay)
    }
}

const debounce=debouncing(getData,300);



let count2 = 0;

let throttling = function(func, delay) {
    let lastCall = 0;
    return function() {
        let context = this;
        let args = arguments;
        let now = new Date().getTime();

        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(context, args);
        }
    }
}

const throttle = throttling(getData, 300);

// Example usage:
window.addEventListener("scroll", throttle);
