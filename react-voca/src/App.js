import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <DayList />
                <Routes>
                    <Route path="/" element={<Day />}></Route>
                    <Route path="/day/:day" element={<Day />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
