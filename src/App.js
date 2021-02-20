import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
  "id": 1,
  "image": "https://placeimg.com/64/64/1",
  "name": "홍길동",
  "birthday": "19690724",
  "gender": "남자",
  "job": "대학생"
 },
 {
  "id": 2,
  "image": "https://placeimg.com/64/64/2",
  "name": "이유주",
  "birthday": "19690724",
  "gender": "여자",
  "job": "고등학생"
 },
 {
  "id": 3,
  "image": "https://placeimg.com/64/64/3",
  "name": "김남주",
  "birthday": "19690724",
  "gender": "여자",
  "job": "직장인"
 }  
];

class App extends Component
{
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return (<Customer 
              key={c.id}
              id={c.id}
              name={c.name}
              birthday={c.birthday}
              image={c.image}
              gender={c.gender}
              job={c.job}
            />  
            )}
          )
        }
      </div>          
    );
  }
}

export default App;
