import React from 'react';
import '../App.css';
import {Counter} from "../features/ui/counter/Counter";
import {Params} from "../features/ui/params/Params";

function App() {
    return (
        <div className="app">
            <Params/>
            <Counter/>
        </div>
    );
}

export default App;
