const wins = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,5,10,15],
    [3,6,9,12],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [0,1,4,5],
    [2,3,6,7],
    [8,9,12,13],
    [10,11,14,15],
    [1,2,5,6],
    [4,5,8,9],
    [5,6,9,10],
    [6,7,10,11],
    [9,10,13,14]
]

export const isGameOver = (values) => {
    for(let win of wins){
        if(win.every(field => values[win[0]] === values[field] && values[win[0]] !== '')){
            console.log('WIN',values[win[0]])
            return true
        }
    }
    if(values.every(value => value !== '')) {
        console.log('Нерешено')
        return true
    }
}

export const isValidMove = (field,values) => values[field] === ''
