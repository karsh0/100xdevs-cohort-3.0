const fs = require('fs');

console.log('Reading file...');

function fn(err,data){
    if(err){
        console.log('Invalid filename');
    }
    else{
        console.log(data);
        let cleanedData = data.replace(/\s+/g, ' ').trim();
        console.log(cleanedData)
        fs.writeFile('b.txt',cleanedData,(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('successfully modified the file data');
            }
        } )
    }
}

fs.readFile('b.txt','utf-8',fn);

