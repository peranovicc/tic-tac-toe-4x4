export const easyComputer = (values) => {
    const validMoves = []
    values.forEach((value,i) => value === '' && validMoves.push(i))
    return validMoves[Math.floor(Math.random()*validMoves.length)]
}

export const hardComputer = (values) => {
    
}