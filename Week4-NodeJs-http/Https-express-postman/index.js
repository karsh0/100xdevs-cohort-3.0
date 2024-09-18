const express = require('express');
const app = express();

const users = [{
    user:'mark',
    age:'27',
    kidneys:[{
        isHealthy: true
    }]
}]

app.get('/',function(req,res){
    //used to display or get the data from the database
    const totalKidneys = users[0].kidneys;
    res.json({totalKidneys})
})

app.use(express.json())

app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({isHealthy});
    const numberOfKidneys = users[0].kidneys.length;
    let numberOfUnhealthyKidneys = 0;
    for(let i=0;i<numberOfKidneys;i++){
        if(users[0].kidneys[i].isHealthy == false){
            numberOfUnhealthyKidneys = numberOfUnhealthyKidneys+1;
        }
    }
    let numberOfHealthyKidneys = numberOfKidneys-numberOfUnhealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfUnhealthyKidneys,
        numberOfHealthyKidneys
    })
})

function isKidneyFail(){
    if(users[0].kidneys.length <= 0){
        return false;
    }
    return true
}

app.put('/',function(req,res){
    if(isKidneyFail()){
        for(let i=0;i<users[0].kidneys.length;i++){
            users[0].kidneys[i].isHealthy = true;
        }
        res.json({msg: 'all kidneys are updated!'})
    }
    else{
        res.json({msg:'no kidney fail to update'})
    }

})

app.delete('/',function(req,res){
    if(isKidneyFail){
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].isHealthy == false){
                users[0].kidneys[i].isHealthy = true;
                break;
            }
        }
    }
    res.json({
        msg:'very first failed kidney is deleted'
    })
})

app.listen(3000);