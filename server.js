const express = require('express');
const bodyParser = require('body-parser');
const GenerateAnswer = require('./answer-generator');
const CompareNumbers = require('./compare-number');

const app = express();

app.use(bodyParser.json());

app.get('/answer', (req, res)=> {
    const answer = GenerateAnswer.generateNumbers();
    res.send(answer);
});

app.post('/result',(req,res)=>{
   const result = CompareNumbers.caculate(req.body.answer,req.body.input);

   res.send(result);
});

app.listen(3000,()=>{
    console.log("server start");
});