function doSomething(){
    throw new Error(
        'a error is thrown from doSomething'
    );
}

function init(){
    try{
        doSomething();
    }
    catch(e){
        console.log(e);
    }
    console.log(
        "After successfully error handling"
    );
}

init();