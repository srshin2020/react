// sqlite3 
// DB 초기화 데이터
const customer = [{
  image: 'https://placeimg.com/64/64/1',
  name: '윤손하',
  birthday: '980102',
  gender: '남자',
  job: '대학생'
},
{
  image: 'https://placeimg.com/64/64/2',
  name: '아이유',
  birthday: '980102',
  gender: '남자',
  job: '대학생'
},
{
  image: 'https://placeimg.com/64/64/3',
  name: '황길동',
  birthday: '980102',
  gender: '남자',
  job: '대학생'
}];

const sqlite3 = require('sqlite3').verbose();

// sqlite3 memory db로 사용
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

//db 명령을 serialize하지 않으면 동시에 실행되므로 table create된 후에 insert 보장안됨.  
db.serialize(function () {

  db.run('CREATE TABLE customer(\
    id integer primary key,\
    image text, \
    name text not null, \
    birthday text, \
    gender text, \
    job text, \
    deleted text )');

  let stmt = db.prepare("INSERT INTO customer VALUES (NULL,?,?,?,?,?,0)");
  for (c of customer) {
    stmt.run(c.image, c.name, c.birthday, c.gender, c.job, function (err) {
      if (err) {
        return console.error(err.message);
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
  }
  stmt.finalize();
});

const express = require('express');
const app = express();
const port = 5000;

// static file 저장하기 위한 폴더 지정
const multer = require('multer');
const upload = multer({ dest: './upload' });
app.use('/image', express.static('./upload'));

// get method
// delete가 1이면 삭제된 것임. 
app.get('/api/customer', (req, res) => {
  console.log('GET api')
  db.all("SELECT * FROM customer where deleted = 0 ", (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.send(rows);
  });
});

// post method
app.post('/api/customer', upload.single('image'), (req, res) => {
  console.log('POST api')
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  db.run('INSERT INTO customer VALUES (NULL,?,?,?,?,?,0)', params, (err) => {
    if (err) {
      return console.error(err.message);
    }
    res.send({ result: 'OK' });
  });
});

// delete method
app.delete('/api/customer/:id', (req, res) => {
  console.log('DELETE api')
  db.run('UPDATE customer set deleted =1 where id =? ', req.params.id, (err) => {
    if (err) {
      return console.error(err.message);
    }
    res.send({ result: 'OK' });
  });

});
// close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

app.listen(port, () => {
  console.log(`Server started... \nListening port on ${port}....`)
});