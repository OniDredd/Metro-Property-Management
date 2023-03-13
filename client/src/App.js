import { Routes, Route } from 'react-router';
import Home from './Components/Pages/Home';
import Property from './Components/Pages/Property';

function App() {


    return (
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/' element={ <Property/> } />
      {/* <Route path='/' element={ <ProprtyPage/> } /> */}
      {/* <Route path='/' element={ <Contact/> } /> */}
    </Routes>
  );
}

export default App;
