
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
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


let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});


db.serialize(function () {

  db.run('CREATE TABLE customer(id integer primary key, image text, name text not null, birthday text, gender text, job text)');

  let stmt = db.prepare("INSERT INTO customer VALUES (?,?,?,?,?,?)");
  for (c of customer) {
    stmt.run(c.i, c.image, c.name, c.birthday, c.gender, c.job);
  }
  stmt.finalize();
  //db.run(`INSERT INTO customer(image, name, birthday, gender, job ) VALUES('https://placeimg.com/64/64/3', '황길동', '2010-01-03', '여성', '대학생')`)
});

app.get('/api/customer', (req, res) => {
  console.log('request from client to read data.')
  db.all("SELECT * FROM customer", (err, rows)  => {
    res.send(rows);
  });
})

// close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

app.listen(port, () => {
  console.log(`Server started... \nListening port on ${port}....`)
})