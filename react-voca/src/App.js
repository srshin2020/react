import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateDay from './component/CreateDay';
import CreateWord from './component/CreateWord';
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
                    <Route path="/createWord" element={<CreateWord />}></Route>
                    <Route path="/createDay" element={<CreateDay />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
