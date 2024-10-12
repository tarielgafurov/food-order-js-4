import './App.css';
// import FoodOrderInfo from './components/FoodOrderInfo';
// import Button from './components/UI/Button';
import Header from './layout/Header';
import Products from './components/product/Products';
import Modal from './components/UI/Modal';
import { useState } from 'react';



function App() {

  const [visibleModal , setVisibleModal] = useState(false)

  const changeStateModalHandler = () => {
    setVisibleModal(prevState => !prevState)
  }

  return (
    <div className="App">
     <Header modal={changeStateModalHandler} />
     {visibleModal && <Modal onClose={changeStateModalHandler} />}
     
      <Products />
    </div>
  );
}

export default App;
