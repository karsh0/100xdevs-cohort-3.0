
function fn(){
   const date = new Date();
   console.log(date.getHours(),':',date.getMinutes(),':',date.getSeconds())
   setTimeout(fn,1000)
}

setTimeout(fn,1000);