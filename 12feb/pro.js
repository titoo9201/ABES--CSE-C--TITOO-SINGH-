const mypromise = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        const success= Math.random()>0.5
        if(success)
        {
            resolve("operation completed successfully")

        }

        else 
        {
            reject(new Error("operation failed"))
        }
    }, 1000);
})

mypromise.then((result)=>{
    console.log("succes",result);
    
})
.catch((error)=>{
    console.log("error",error.message);
    
})

