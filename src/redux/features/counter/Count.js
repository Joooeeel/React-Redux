import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrase, increase, increaseByNum } from './counterSlice';

import './count.css';

export default () => {
    const counter = useSelector((data) => data.count.num); //selecionamos el reducer que queremos con el nombre que le hemos dado en el STORE, y el dato que queremos recoger. 
    const dispatch = useDispatch(); //Usar dispatch actions -> acciones de enviar información al store.

    const [numInput, setNumInput] = useState('0')

    return (
        <div className='body'>
            <button className='btns'
                aria-label="Increment value"
                onClick={() => {
                    dispatch(increase())
                }}
            >
                Increment (+)
            </button>
            <br />
            <span className='result'>{counter}</span>
            <br />
            <button className='btns'
                aria-label="Decrement value"
                onClick={() => dispatch(decrase())}
            >
                Decrease (-)
            </button>
            <br /><br />
            <div>
                <input type="text" className="numEnter"
                    value={numInput}
                    onChange={e => setNumInput(e.target.value)}
                />
                <button className="btns"
                    onClick={() => dispatch(increaseByNum(Number(numInput)))}
                >
                    Sumar Valor
                </button>
            </div>
        </div>
    )
}