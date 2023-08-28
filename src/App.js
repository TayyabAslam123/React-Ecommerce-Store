import logo from './logo.svg';
import './App.css';
import TopBar from './Components/Common/TopBar';
import NavBar from './Components/Common/NavBar';
import Home from './Components/Pages/Home';
import Footer from './Components/Common/Footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
