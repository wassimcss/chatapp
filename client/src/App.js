import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import DetailProduct from './components/body/productDetails/DetailProduct';
import Product from './components/body/products/Product';

function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={Product}/>
      <Route exact path="/product/:id" component={DetailProduct} />
    </Router>
    </div>
  );
}

export default App;
