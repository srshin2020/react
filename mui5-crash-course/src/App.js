import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appbar from './component/Appbar';
import Home from './pages/Home';
import Tour from './pages/Tour';


function App() {
  return (
    <BrowserRouter>
      <Appbar></Appbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Tour />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
