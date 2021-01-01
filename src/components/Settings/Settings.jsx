import React, { useState } from 'react'
import { EASY, EASY_DESCRIPTION, HARD, HARD_DESCRIPTION, MEDIUM, MEDIUM_DESCRIPTION } from '../../utility/constants'
import { Button } from '../Common/StyledButton'
import { StyledSettings } from './StyledSettings'

const Settings = ({ setDifficulty,visible,setVisible }) => {
    const [description, setDescription] = useState(null)

    const difficultySetter = (diff) => {
        setDifficulty(Number(diff));
        setVisible(false)
    }


    return (
        <StyledSettings isVisible={visible} className={visible || 'closed'}>
            <h1>4x4 Икс-Окс</h1>
            <h2>Изабрати тежину</h2>
            <div className="btn-container">
                <Button value={EASY}
                    onClick={(e) => difficultySetter(e.target.value)}
                    onMouseEnter={() => setDescription(EASY_DESCRIPTION)}
                    onMouseLeave={() => setDescription(null)}
                >
                    Лако
                </Button>
                <Button value={MEDIUM}
                    onClick={(e) => difficultySetter(e.target.value)}
                    onMouseEnter={() => setDescription(MEDIUM_DESCRIPTION)}
                    onMouseLeave={() => setDescription(null)}
                >
                    Средње
                </Button>
                <Button value={HARD}
                    onClick={(e) => difficultySetter(e.target.value)}
                    onMouseEnter={() => setDescription(HARD_DESCRIPTION)}
                    onMouseLeave={() => setDescription(null)}
                >
                    Тешко
                </Button>
            </div>
            <h3>Опис тежине: (пређите мишем преко тежине)</h3>
            <p>{description}</p>
            <h4>Правила и упутства</h4>
            <li>Спојити 4 знака на неки од следећих начина:</li>
            <div>
            <div className="shape">
                •<br />
                &nbsp;&nbsp;&nbsp;&nbsp;•<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•
                </div>
                <div className="shape">•&nbsp;•&nbsp;•&nbsp;•</div>
                <div className="shape">•<br/>•<br/>•<br/>•</div>
                <div className="shape">
                    •&nbsp;•<br/>•&nbsp;•
                </div>
                <div className="shape">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    •
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    •
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;•<br />•
                </div>
                
            </div>
            

        </StyledSettings>
    )
}

export default Settings