import './App.css';
import Input from './components/Input';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import Product from './components/Fakestore/Product';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductItem from './components/Fakestore/ProductItem';
import Form from './components/Form/Form';

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />}/>
          <Route path="/productItem/:id" element={<ProductItem />}/>
          {/* <Route path="/form" element={<Form />}/> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
