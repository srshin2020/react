const express = require('express');
const app = express();

const port = 5000;

const customer = [{
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '윤손하',
    birthday: '980102',
    gender: '남자',
    job: '대학생'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '아이유',
    birthday: '980102',
    gender: '남자',
    job: '대학생'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '황길동',
    birthday: '980102',
    gender: '남자',
    job: '대학생'
  }]
  
  

app.get ('/api/customers', (req, res)=>{
    res.send(customer);
})

app.listen (port, ()=>{
    console.log(`Server started... \nListening port on ${port}....`) 
})