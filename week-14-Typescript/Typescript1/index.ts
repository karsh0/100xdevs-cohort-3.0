
function delayedCall(fn: ()=> void){
    setTimeout(fn, 2000)
}

delayedCall(()=>{
    console.log("hello")
})