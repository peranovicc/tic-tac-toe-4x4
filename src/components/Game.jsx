import React, { useCallback, useEffect, useState } from 'react'
import { easyComputer } from '../utility/computerPlayer'
import { isGameOver, isValidMove } from '../utility/gameCheck'
import { PLAYER1,COMPUTER } from '../utility/constants'

const Field = ({ value,text,move }) => {
    switch(text){
        case PLAYER1: text = 'P'; break;
        case COMPUTER: text = 'C'; break;
        default: text = ''; break;
    }

    return (
        <div onClick={() => move(value,PLAYER1)} className="field">
            {text}
        </div>
    )
}



const Game = ({ difficulty }) => {
    const fields = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const [values, setValues] = useState((new Array(16)).fill(''))
    const [turn,setTurn] = useState(Math.random() > 0.5 ? PLAYER1 : COMPUTER)
    const [finished,setFinished] = useState(false)

    const move = useCallback((field,player) => {
        if(!isValidMove(field,values) || finished) return 
        if(player !== turn) return
        let next = turn === PLAYER1 ? COMPUTER : PLAYER1
        setTurn(next)
        setValues(values => {
            let tmp = [...values]
            tmp.splice(field,1,turn)
            return tmp
        })
    },[turn,values,finished])

    const computerMove = useCallback((values) => {
        setTimeout(() => {
            move(easyComputer(values),COMPUTER)
        },Math.random()*1000) // Computer waits 0-1s before making a move  
    },[move])
   
    const resetField = () => {
        if(finished || window.confirm('Да ли сте сигурни да желите да поништите игру?')){
            setFinished(false)
            setTurn(Math.random() > 0.5 ? 'X' : 'O')
            setValues((new Array(16)).fill(''))
        }
    }
    
    useEffect(() => {
        if(isGameOver(values)){
            setFinished(true)
        }
        else turn === COMPUTER && computerMove(values)
    },[values,turn,computerMove])

    
        

    return (
        <div id="game">
            <p>Turn: {turn}</p>
            <div id="fields">
            {
                fields.map((field, i) =>
                    <Field
                        key={field}
                        value={field}
                        text={values[i]}
                        move={move}
                    />
            )}
            </div>
            <button onClick={resetField}>Почни поново</button>
        </div>
    )
}

export default Game