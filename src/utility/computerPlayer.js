import { COMPUTER, PLAYER1, scores } from './constants'
import { checkWinner, isGameOver } from './gameCheck'

export const easyComputer = (values) => {
    const validMoves = []
    values.forEach((value,i) => value === '' && validMoves.push(i))
    return validMoves[Math.floor(Math.random()*validMoves.length)]
}

export const hardComputer = (values) => {
    if(values.filter(value => value !== '').length < 3){
        let fields = [5,6,9,10]
        return fields.find(field => values[field] === '')
    }
    let bestScore = -Infinity
    let bestMove = values.indexOf('')
    values.forEach((value,i,arr) => {
        if(value === '') {
            let tmp = [...arr]
            tmp[i] = COMPUTER
            let score = minimax(tmp,0,false,-Infinity,Infinity)
            console.log(score)
            if(score > bestScore){
                bestScore = score
                bestMove = i
            }
        }
    })
    return bestMove
}



function minimax(values,depth,isMaximising,alpha,beta){
    if(isGameOver(values)){
        return scores[checkWinner(values)]
    }

    if(isMaximising){
        let bestScore = -Infinity
        values.some((value,i,arr) => {
            if(value === '') {
                let tmp = [...arr]
                tmp[i] = COMPUTER
                let score = minimax(tmp,depth + 1,false,alpha,beta)    
                bestScore = Math.max(score,bestScore)
                alpha = Math.max(alpha,bestScore)
                if(beta <= alpha)
                    return true
            }
            return false
        })
        return bestScore-depth
    }
    else{
        let bestScore = Infinity
        values.some((value,i,arr) => {
            if(value === '') {
                let tmp = [...arr]
                tmp[i] = PLAYER1
                let score = minimax(tmp,depth + 1,true,alpha,beta)    
                bestScore = Math.min(score,bestScore)
                beta = Math.min(beta,bestScore)
                if(beta <= alpha)
                    return true
            }
            return false
        })
        return bestScore+depth
    }
}

