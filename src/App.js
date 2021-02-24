import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var person ={
  //   name: "Dr. Pangupal Dotto",
  //   job:"Doctor"
  // }
  // var style={
  //   color:'red',
  //   backgroundColor:'yellow'
  // }
  const nayoks = ['Razzak', 'jasim', 'Manaa', 'salmalsa', 'bappiii'];
  const products = [
    {name: 'Photoshop', price:'&99.99'},
    {name: 'Illustrator', price:'60.99'},
    {name: 'PDF Reader', price:'6.99'}
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={style}>First React: {person.name + " "+ person.job}</h1>
        <p>My First React Javascript.</p> */}
        <p>I am a React person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        <Person name="Soymu sharkar" food="Fuska"></Person>
        <Person name="Liton Das" food="Kasta"></Person>
        <Person name="Timim ikbal" food="Tush"></Person>
        <Person name="Nasmol shanto" food="Nubush"></Person>

      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    // const newCount = count + 1;
    setCount(count + 1);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
      }
    </div>
  )
}

function Product(props) {
  const productsStyle={
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  console.log(name, price);
  return (
    <div style={productsStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border:'2px solid red',
    margin:'10px',
    padding: '10px'
  }
  console.log(props);
  // inline css: style={{border: '2px solid red', margin:'10px'}}
  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Food: {props.food}</h3>
  </div>
  )
}

export default App;
