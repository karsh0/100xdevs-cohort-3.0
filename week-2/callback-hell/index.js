/*
function Promisified(ms){
    return new Promise((resolve,rejects) =>{
        setTimeout(resolve,ms);
    })
}

// Promisified(5000).then(function(){
//     console.log('5 sec are done!');
// })

async function solve(){
    await Promisified(2000)
    console.log('2sec done!')
}

solve()
*/

//API async await

// Could be GET or POST/PUT/PATCH/DELETE
async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  console.log(data);
}

getProducts()
/* { status: 'ok', method: 'GET' } */
