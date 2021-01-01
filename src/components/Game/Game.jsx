import React, { useCallback, useEffect, useState } from 'react'
import { AI } from '../../utility/computerPlayer'
import { checkWinner, isGameOver, isValidMove } from '../../utility/gameCheck'
import { PLAYER1,COMPUTER } from '../../utility/constants'
import { StyledFields, StyledGame } from './StyledGame'
import { Field } from './Field'
import { Button } from '../Common/StyledButton'

const Game = ({ difficulty,setVisibleSettings,setDifficulty }) => {
    const fields = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const [values, setValues] = useState((new Array(16)).fill(''))
    const [turn,setTurn] = useState(Math.random() > 0.5 ? PLAYER1 : COMPUTER)
    const [finished,setFinished] = useState(false)
    const [score,setScore] = useState([0,0])

    const move = useCallback((field,player,values) => {
        if(!isValidMove(field,values) || finished) return 
        if(player !== turn) return
        let next = turn === PLAYER1 ? COMPUTER : PLAYER1
        setTurn(next)
        setValues(values => {
            let tmp = [...values]
            tmp.splice(field,1,turn)
            return tmp
        })
    },[turn,finished])

    const computerMove = useCallback((values) => { 
        setTimeout(() => {
            difficulty && move(AI(difficulty,values),COMPUTER,values) 
        },300) // Computer starts to calculate after 0.3s
    },[move,difficulty])

    const resetField = () => {
        if(finished || window.confirm('Да ли сте сигурни да желите да прекинете тренутну игру?')){
            setFinished(false)
            setValues((new Array(16)).fill(''))
            return true
        }
        return false
    }

    useEffect(() => {
        setTurn(Math.random() > 0.5 ? PLAYER1 : COMPUTER)
    },[difficulty])
    
    useEffect(() => {
        if(isGameOver(values)){
            let winner = checkWinner(values)
            if(winner === COMPUTER) setScore(score => [score[PLAYER1],score[COMPUTER] + 0.5]) 
            if(winner === PLAYER1) setScore(score => [score[PLAYER1] + 0.5,score[COMPUTER]]) 
            setFinished(true)
        }
        else turn === COMPUTER && computerMove(values,COMPUTER)
    },[values,turn,computerMove])

    return (
        <StyledGame>
            <div>
                <p>Играч {score[PLAYER1]} : {score[COMPUTER]} Рачунар</p>
                <p>{!finished ? `На потезу: ${turn === PLAYER1 ? 'Играч' : 'Рачунар'}` : <br />}</p>
                <StyledFields>
                {
                    fields.map((field, i) =>
                        <Field
                            key={field}
                            value={field}
                            text={values[i]}
                            move={move}
                            values={values}
                        />
                )}
                </StyledFields>
            </div>
            <div id="btn-container">
                <Button onClick={resetField}>Почни поново</Button>
                <Button onClick={() => {
                    resetField() && setVisibleSettings(true) && setDifficulty(null)
                }}>
                    Промени тежину
                </Button>
            </div>
        </StyledGame>
    )
}

export default Game