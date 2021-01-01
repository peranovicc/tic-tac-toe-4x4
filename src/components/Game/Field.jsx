import React from 'react'
import { COMPUTER, PLAYER1 } from '../../utility/constants';
import { StyledField } from './StyledGame';

export const Field = ({ value,text,move,values }) => {
    let style
    switch(text){
        case PLAYER1: style = 'player'; break;
        case COMPUTER: style = 'ai'; break;
        default: style = ''; break;
    }

    return (
        <StyledField onClick={() => move(value,PLAYER1,values)} className={`field ${style}`} />
    )
}