import React, { useCallback, useEffect, useState } from 'react'
import { AI } from '../../utility/computerPlayer'
import { checkWinner, isGameOver, isValidMove, winFields } from '../../utility/gameCheck'
import { PLAYER1,PLAYER2 } from '../../utility/constants'
import { StyledFields, StyledGame } from './StyledGame'
import { Field } from './Field'
import { Button } from '../Common/StyledButton'
import Confirm from '../Confirm/Confirm'
import { useConfirm } from '../Confirm/ConfirmHook'

const Game = ({ difficulty,setVisibleSettings,setDifficulty }) => {
    const fields = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const [values, setValues] = useState((new Array(16)).fill(''))
    const [winValues,setWinValues] = useState([])
    const [turn,setTurn] = useState(Math.random() > 0.5 ? PLAYER1 : PLAYER2)
    const [finished,setFinished] = useState(false)
    const [score,setScore] = useState([0,0])

    const [open,setOpen,confirm,setConfirm] = useConfirm(false,()=>{},()=>{})
    const [prompt,setPrompt] = useState('')

    const move = useCallback((field,player,values) => {
        if(!isValidMove(field,values) || finished) return 
        if(player !== turn && difficulty) return
        let next = turn === PLAYER1 ? PLAYER2 : PLAYER1
        setTurn(next)
        setValues(values => {
            let tmp = [...values]
            tmp.splice(field,1,turn)
            return tmp
        })
    },[turn,finished,difficulty])

    const computerMove = useCallback((values) => { 
        setTimeout(() => {
            difficulty && move(AI(difficulty,values),PLAYER2,values) 
        },300) // Computer starts to calculate after 0.3s
    },[move,difficulty])

    const resetField = () => {
        setFinished(false)
        setValues((new Array(16)).fill(''))
        setWinValues([])
        setTurn(Math.random() > 0.5 ? PLAYER1 : PLAYER2)
    }
    const changeDifficulty = () => {
        resetField()
        setVisibleSettings(true) 
        setDifficulty(null) 
        setScore([0,0])
    }
    useEffect(() => {
           difficulty && setTurn(Math.random() > 0.5 ? PLAYER1 : PLAYER2)
    },[difficulty])
    
    useEffect(() => {
        if(isGameOver(values)){
            let winner = checkWinner(values)
            if(winner === PLAYER2) setScore(score => [score[PLAYER1],score[PLAYER2] + 0.5]) 
            if(winner === PLAYER1) setScore(score => [score[PLAYER1] + 0.5,score[PLAYER2]]) 
            setWinValues(winFields(values))
            setFinished(true)
        }
        else if(difficulty) turn === PLAYER2 && computerMove(values,PLAYER2)
    },[values,turn,computerMove,difficulty])

    let difficultyText
    switch(difficulty){
        case 1: difficultyText = 'Лако';break;
        case 2: difficultyText = 'Средње';break;
        case 3: difficultyText = 'Тешко';break;
        default: difficultyText = 'Изаберите тежину';break;
    }

    return (
        <StyledGame>
            <div>
                <p>{!finished ? `На потезу: ${turn === PLAYER1 ? 'Играч 1' : (difficulty ? 'Рачунар' : 'Играч 2')}` : <br />}</p>
                <p id="score"><span className="span-name">Играч 1</span> {score[PLAYER1]} : {score[PLAYER2]} <span className="span-name">{difficulty ? 'Рачунар' : 'Играч 2'}</span></p>
                <div id="game-container">
                    <StyledFields>
                    {
                        fields.map((field, i) =>
                            <Field
                                key={field}
                                value={field}
                                text={values[i]}
                                move={move}
                                values={values}
                                win={winValues.includes(field)}
                            />
                    )}
                    </StyledFields>
                    {difficulty ? <p>Тежина игре: {difficultyText}</p> : null}
                </div>
            </div>
            <div id="btn-container">
                <Button onClick={() => {
                    if(finished || values.every(value => value === '')){
                        resetField()
                    }
                    else{
                        setOpen(true)
                        setConfirm(() => resetField)
                        setPrompt('Поништавање тренутне игре?')
                    }
                }}>Почни поново</Button>
                <Button onClick={() => {
                    setOpen(true)
                    setConfirm(() => changeDifficulty)
                    setPrompt('Рестарт и мењање подешавања?')
                }}>
                    Подешавања ⚙
                </Button>
            </div>
            <Confirm
                isOpen={open}
                setIsOpen={setOpen}
                onConfirm={confirm}
                text={prompt}
            />
        </StyledGame>
    )
}

export default Game