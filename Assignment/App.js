import React, { useState } from 'react';
import './styles.css';

function App() {
    const [input, setInput] = useState('');

    const appendToInput = (value) => {
        setInput(input + value);
    };

    const clearInput = () => {
        setInput('');
    };

    const calculateResult = () => {
        try {
            const result = eval(input);
            setInput(result.toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={input} readOnly />
            <div className="buttons">
                <button onClick={clearInput}>C</button>
                <button onClick={() => appendToInput('7')}>7</button>
                <button onClick={() => appendToInput('8')}>8</button>
                <button onClick={() => appendToInput('9')}>9</button>
                <button onClick={() => appendToInput('/')}>/</button>
                <button onClick={() => appendToInput('4')}>4</button>
                <button onClick={() => appendToInput('5')}>5</button>
                <button onClick={() => appendToInput('6')}>6</button>
                <button onClick={() => appendToInput('*')}>*</button>
                <button onClick={() => appendToInput('1')}>1</button>
                <button onClick={() => appendToInput('2')}>2</button>
                <button onClick={() => appendToInput('3')}>3</button>
                <button onClick={() => appendToInput('-')}>-</button>
                <button onClick={() => appendToInput('0')}>0</button>
                <button onClick={calculateResult}>=</button>
                <button onClick={() => appendToInput('+')}>+</button>
            </div>
        </div>
    );
}

export default App;