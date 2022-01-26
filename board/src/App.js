// import './App.css';
import Customer from "./component/Customer";

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

function App() {
  return (
    <div>
      {
        customer.map(c => {
          return (
            <Customer key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job} ></Customer>
          )
        })
      }
    </div>
  );
}

export default App;
