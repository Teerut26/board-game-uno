import React from "react";
import { useRecoilState } from "recoil";
import "./App.css";
import { counterState } from "./store/counterRecoil";

function App() {
    const [counter, setCounter] = useRecoilState(counterState);
    return (
        <div>
            <h1 className="text-3xl font-bold underline">{counter}</h1>
            <button onClick={() => setCounter((pre) => pre + 1)}>
                increase
            </button>
            <button onClick={() => setCounter((pre) => pre - 1)}>
                decrease
            </button>
        </div>
    );
}

export default App;
