import './App.css';
import Input from './components/Input';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Input></Input> */}
        <CakeContainer></CakeContainer>
        <IceCreamContainer></IceCreamContainer>
      </div>
    </Provider>
  );
}

export default App;
