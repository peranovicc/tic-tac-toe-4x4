import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Game from './components/Game'
import Settings from './components/Settings'
import './index.css'

const App = () => {
    const [difficulty,setDifficulty] = useState(0) // 0,1,2 - Easy,Medium,Hard


    return (
        <>
            <Settings setDifficulty={setDifficulty} />
            <Game difficulty={difficulty} />
        </>
    )
}


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

