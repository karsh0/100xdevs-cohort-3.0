const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path')

app.get('/files/:fileName',function(req,res){
    const fileName = req.params.fileName;
    fs.readFile(`./files/${fileName}`,'utf-8',function(err,data){
        if(fileName){
            res.json({
                data
            })
        }
    })
})

//post request/ adding data to servers
// Middleware to parse JSON bodies
app.use(express.json());

app.post('/files/:fileName',function(req,res){
    const fileName = req.params.fileName;
    const content = req.body.content;
    const sanitizedFileName = path.basename(fileName);
    fs.appendFile(`./files/${sanitizedFileName}`, content, (err) => {
        if (err) {
            console.error('Error appending to file', err);
        } else {
            console.log('Content appended successfully!');
        }
    });
    res.json({
        msg:'posted!'
    })
})

//updating the post
app.put('/files/:fileName',function(req,res){
    const fileName = req.params.fileName;
    const content = req.body.content;
    const sanitizedFileName = path.basename(fileName);
    fs.writeFile(`./files/${sanitizedFileName}`,content,function(err){
        if(err){
            res.json({msg:'error in writing file'})
        }
        else{
            res.json({msg:'file has updated successfully'})
        }
    })
})

app.delete('./files/:fileName',function(req,res){
    const fileName = req.params.fileName;
    const sanitizedFileName = path.basename(fileName);
    fs.unlink(`./files/${sanitizedFileName}`,(err)=>{
        if(err){
            res.json({msg:'unlink failed'})
        }
        else{
            res.json({
                msg:'unlink done!'
            })
        }
    })
})

app.listen(3000);