import React, { Component } from "react";
import AppShell from './AppShell';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Text from './Text';
import Word from './Word';


class App extends Component {
    render() {
        return (
            <HashRouter>
                <AppShell>
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/text' element={<Text/>}></Route>
                        <Route path='/word' element={<Word/>}></Route>
                    </Routes>
                </AppShell>
            </HashRouter>
        );
    }
}
export default App;