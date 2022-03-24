import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MealLoad from './components/MealLoad/MealLoad';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <MealLoad></MealLoad>
    </div>
  );
}

export default App;
