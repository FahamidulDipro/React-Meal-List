import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MealLoad from './components/MealLoad/MealLoad';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Search></Search>
    </div>
  );
}

export default App;
