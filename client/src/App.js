import { Routes, Route } from 'react-router';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home';
import Property from './Components/Pages/Property';
import Listing from './Components/Pages/Listing';

function App() {


    return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/Property' element={ <Listing /> } />
      <Route path='/PropertyPage' element={ <Property /> } />
      {/* <Route path='/' element={ <Contact/> } /> */}
    </Routes>
    <Footer />
    </>
  );
}

export default App;
