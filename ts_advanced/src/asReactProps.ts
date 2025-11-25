interface Format{
    label : string,
    todo : () => void
}

function clickHandler({label,todo} : Format){
    console.log("label is", label)
    console.log("answer of function is ", todo())
}

// Pass a single object that matches the Format interface
clickHandler({
    label: "doing Something",
    todo: () => {
        return 8
    }
})