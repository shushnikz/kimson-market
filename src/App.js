import About from './About';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Review from './Review';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
      <About />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
