import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Game from './components/Game/Game'
import Settings from './components/Settings/Settings'
import './index.css'

const App = () => {
    const [difficulty,setDifficulty] = useState(null) // 0,1,2 - Easy,Medium,Hard
    const [visibleSettings,setVisibleSettings] = useState(true)

    return (
        <>
            <Settings 
                setDifficulty={setDifficulty} 
                visible={visibleSettings} 
                setVisible={setVisibleSettings} 
            />
            <Game 
                difficulty={difficulty} 
                setVisibleSettings={setVisibleSettings}
                setDifficulty={setDifficulty} 
            />
        </>
    )
}


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

