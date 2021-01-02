import styled from 'styled-components';

export const StyledGame = styled.div`
    display: flex;
    padding-top: 48px;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;  
    #btn-container{
        display: flex;
        flex-direction: column;
        margin:5vh auto;
        width: 30vw;
        button{
            width: 100%;
            margin-top: 1rem;
        }
        @media (max-width: 300px){
            width: 70%;
        }
    } 

    #game-container{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`

export const StyledFields = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(4,1fr);
    column-gap: 3px;
    row-gap: 3px;
    height: 55vw;
    width: 55vw;
    padding: 5px;

    @media (min-width: 767px) { 
        height: 30vw;
        width: 30vw;
    }
`

export const StyledField = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#ffd369;
    text-align: center;
    color: #222831;
    max-height: 100%;
    padding: 0;
    cursor: pointer;
    text-align: center;
    transition: transform 0.8s;
    font-size: 2rem;
    &.player{
        cursor: not-allowed;
        transform: rotateY(180deg);
        &::after{
            content:'X'
        }
        background-color:#a9f5a9;
    }
    &.ai{
        cursor: not-allowed;
        transform: rotateY(180deg);
        &::after{
            content:'O'
        }
        background-color:#fb8383;

    }
`
