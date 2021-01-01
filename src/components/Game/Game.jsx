import React, { useCallback, useEffect, useState } from 'react'
import { AI } from '../../utility/computerPlayer'
import { isGameOver, isValidMove } from '../../utility/gameCheck'
import { PLAYER1,COMPUTER } from '../../utility/constants'
import { StyledField, StyledFields, StyledGame } from './StyledGame'

const Field = ({ value,text,move }) => {
    switch(text){
        case PLAYER1: text = 'P'; break;
        case COMPUTER: text = 'C'; break;
        default: text = ''; break;
    }

    return (
        <StyledField onClick={() => move(value,PLAYER1)} className="field">
            {text}
        </StyledField>
    )
}



const Game = ({ difficulty }) => {
    const fields = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const [values, setValues] = useState(['','','','','','','','','','','','','','','',''])
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
        move(AI(difficulty,values),COMPUTER)  
    },[move,difficulty])
   
    const resetField = () => {
        if(finished || window.confirm('Да ли сте сигурни да желите да поништите игру?')){
            setFinished(false)
            setTurn(Math.random() > 0.5 ? COMPUTER : PLAYER1)
            setValues((new Array(16)).fill(''))
        }
    }
    
    useEffect(() => {
        if(isGameOver(values)){
            console.log('GAME OVER')
            setFinished(true)
        }
        else turn === COMPUTER && computerMove(values,COMPUTER)
    },[values,turn,computerMove])

    
        

    return (
        <StyledGame>
            <p>Turn: {turn}</p>
            <StyledFields>
            {
                fields.map((field, i) =>
                    <Field
                        key={field}
                        value={field}
                        text={values[i]}
                        move={move}
                    />
            )}
            </StyledFields>
            <button onClick={resetField}>Почни поново</button>
        </StyledGame>
    )
}

export default Game