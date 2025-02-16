import './App.css';
import image from './shopping-211128-142332.jpg';
import imageTwo from './man-211128-142332.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className="container">
    <img src={ image } width='200px' alt='shopping'/>
    </div>
    <div className="container">
    <h1>Grocery List</h1>
    </div>
    <GroceryList/>
    <div className="container">
    <img src={ imageTwo } width='250px' alt='man'/>
    </div>
    </div>
  );
}

export default App;
