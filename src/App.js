import './App.css';
import { GroceryList } from './Grocerry';
import image from './img/logo.jpeg';
import imageTwo from './img/man-211128-142332.jpg';


function App() {
  return (
    <div className='appBox'>
      <img src={ image } width="220px" alt="gricerry"/>
      <GroceryList />

      <img src={ imageTwo } width="220px" alt="gricerry"/>


    </div>
  )
  
}

export default App;
