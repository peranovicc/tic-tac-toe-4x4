import React, { useState } from 'react'

const Field = ({ value,text,move }) => {
    return (
        <div onClick={() => move(value)} className="field">
            {text}
        </div>
    )
}

const Game = ({ difficulty }) => {
    const fields = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const [values, setValues] = useState((new Array(16).fill('')))
    const [turn,setTurn] = useState(Math.random() > 0.5 ? 'X' : 'O') // X player, O computer

    const move = (field) => {
        if(values[field] !== ''){
            console.log('Већ попуњено')
            return
        }
        let next = turn === 'X' ? 'O' : 'X'
        setTurn(next)
        setValues(values => {
            let tmp = [...values]
            tmp.splice(field,1,turn)
            return tmp
        })
    }

    return (
        <div id="game">
            <div id="fields">
            {fields.map((field, i) =>
                <Field
                    key={field}
                    value={field}
                    text={values[i]}
                    move={move}
                />
            )}
            </div>
        </div>
    )
}

export default Game