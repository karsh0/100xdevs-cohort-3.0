//using setTimeout

let count = 0;

function fn(){
    console.log(count);
    count = count+1;
    setTimeout(fn,1000);
}

setTimeout(fn,1000);