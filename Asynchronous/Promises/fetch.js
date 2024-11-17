const url = "https://jsonplaceholder.typicode.com/posts/1";
// const url = "https://jsonplaceholder.typicode.com/posts/1000";  //-->error

fetch(url).then((response)=>{
    console.log(response);
    
    if(!response.ok){
        throw new Error("failed to fetch");
    }
    return response.json();
}).then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.error(err);
    
})