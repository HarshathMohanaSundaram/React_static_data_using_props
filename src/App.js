import './App.css';
import maruti from './images/maruti.jpg'
import hyundai from './images/hyundai.jpg'
import mahindra from './images/mahindra.jpg'
import tata from './images/Tata.jpg'
import toyota from './images/toyota.jpg'
import Car from './car';

function App() {
  const car = [
    {id:1,image:maruti,name:"Maruti Suzuki", year:"1981"},
    {id:2,image:mahindra,name:"Mahindra" , year :"1981"},
    {id:3,image:hyundai,name:"Hyundai", year: "1981"},
    {id:4,image:tata,name:"Tata Motors", year: "1981"},
    {id:5,image:toyota,name:"Toyota", year:"1981"},
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Car cars= {car} />
      </header>
    </div>
  );
}

export default App;
