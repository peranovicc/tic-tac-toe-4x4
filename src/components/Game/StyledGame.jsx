import styled from 'styled-components';

export const StyledGame = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;  
    #btn-container{
        display: flex;
        flex-direction: column;
        margin:auto;
        width: 30vw;
        button{
            width: 100%;
            margin-top: 1rem;
        }
    } 
`

export const StyledFields = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(4,1fr);
    column-gap: 3px;
    row-gap: 3px;
    height: 60vw;
    width: 60vw;
    margin: auto;
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
    padding: 0;

    text-align: center;
    transition: transform 0.8s;
    &.player{
        transform: rotateY(180deg);
        &::after{
            content:'X'
        }
    }
    &.ai{
        transform: rotateY(180deg);
        &::after{
            content:'O'
        }
    }
`
