type datatypes = number | boolean | string

function doSomething( data : datatypes ){

    if(typeof data === "string"){
        console.log(data.toLocaleLowerCase())
    }
    else if(typeof data === "number"){
        console.log("The multiple table of ",data)
        console.log("")
        for(let i=0;i <= 10;i++){
            console.log(`${data} x ${i} = ${data *i}`)
        }
    }
    else{
        (data === true)? console.log("you are a bad persoin") : console.log("YOu are a good person")
    }
}

doSomething(5)