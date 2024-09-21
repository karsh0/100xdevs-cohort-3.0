//map,filter and arrow functions

let arr = [1,2,3,4,5];

//map creates a new array and modify it accordingly given the previous array 

const ans = arr.map((e)=>{
    return e*2;
})

// console.log(ans);

//filtering 

const res = arr.filter((n) =>{
    if(n%2 == 0){
        return true;
    }
    else{
        return false;
    }
})
// console.log(res)

//assignment
//create a map fn which takes arr and transform fn as input and returns the transformed as output
let transform = [];
const mapp = (arr,transform) =>{
    for(let i=0;i<arr.length;i++){
        transform.push(arr[i]*5);
    }
    return transform;
}
console.log(mapp(arr,transform))