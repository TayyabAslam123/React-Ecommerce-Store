import logo from './logo.svg';
import './App.css';
import TopBar from './Components/Common/TopBar';
import NavBar from './Components/Common/NavBar';
import Home from './Components/Pages/Home';
import Footer from './Components/Common/Footer';
import Contact from './Components/Pages/Contact';
import Products from './Components/Pages/Products';
import { ProductDetail } from './Components/Pages/ProductDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <NavBar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product-detail/:id" element={<ProductDetail />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
        <Footer />
      </div>
     
    </Router>
  );
}

export default App;
