import { COMPUTER, EASY, HARD, MEDIUM, PLAYER1, scores } from './constants'
import { checkWinner, isGameOver, wins } from './gameCheck'

export const movesPlayed = (values) => values.filter(value => value !== '').length

const easyComputer = (values) => {
    const validMoves = []
    values.forEach((value,i) => value === '' && validMoves.push(i))
    return validMoves[Math.floor(Math.random()*validMoves.length)]
}

const mediumComputer = (values) => {
    return movesPlayed(values) < 5 ? easyComputer(values) : hardComputer(values)
}

const hardComputer = (values) => {
    if(movesPlayed(values) < 3){
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
    if(movesPlayed(values) === 15 || depth === 6){
        return evaluate(values)
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

function evaluate(values){
    let resultComputer = {
        3: 0,
        2: 0,
        1: 0
    }
    let resultPlayer = {
        3: 0,
        2: 0,
        1: 0
    }
    wins.forEach(win => {
        let winValues = win.map(field => values[field])
        let [cCount,pCount] = [0,0]

        winValues.forEach(value => {
            if(value === COMPUTER) cCount++
            if(value === PLAYER1) pCount++
        })
        if(pCount === 0)
            resultComputer[cCount]++
        if(cCount === 0)
            resultPlayer[pCount]++
    })

    return 7*(resultComputer[3] - resultPlayer[3]) + 2*(resultComputer[2] - resultPlayer[2]) + (resultComputer[1] - resultPlayer[1])
}

export const AI = (difficulty,values) => {
    switch(difficulty){
        case EASY: return easyComputer(values)
        case MEDIUM: return mediumComputer(values)
        case HARD: return hardComputer(values)
        default: return hardComputer(values)
    }
}

