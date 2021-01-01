import React from 'react'

const Settings = ({ setDifficulty }) => {
    return (
        <div id="settings">
            <h1>Изабрати тежину</h1>
            <div id="buttons">
                <button onClick={() => setDifficulty(0)}>Лако</button>
                <button onClick={() => setDifficulty(1)}>Средње</button>
                <button onClick={() => setDifficulty(2)}>Тешко</button>
            </div>
            <h3>Опис тежина:</h3>
            <ul>
                <li>Лако: Рачунар насумично бира потезе</li>
                <li>Средње: Рачунар насумично бира првих неколико потеза</li>
                <li>Тешко: Рачунар бира оптималан потез</li>
            </ul>
 
        </div>
    )
}

export default Settings