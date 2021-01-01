import styled from 'styled-components';

export const StyledGame = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    @keyframes shine {
        0% {
            background-position: right;    
        }
    }
    button{
        height: 3rem;
        color: #393e46;
        background-color:#ffd369;
        background-image: linear-gradient(
            to right,
            transparent 33%,
            #fdebbb,
            transparent 66%
        );
        background-size:300% 100%;
        border: 1px solid #222831;
        margin: 1rem 25% 0.1rem 25%;
        cursor: pointer;
        &:hover{
            animation: shine 2s;
        }
        @media (min-width: 767px) { 
            margin: 1rem 35% 0.1rem 35%;
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
