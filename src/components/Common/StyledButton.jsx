import styled from 'styled-components';

export const Button = styled.button`
    @keyframes shine {
        0% {
            background-position: right;    
        }
    }
    display:block;
    height: 3rem;
    width: 50%;
    font-size: 1.2rem;
    line-height: 1rem;
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
    cursor: pointer;
    &:hover{
        animation: shine 2s;
    }
    @media (min-width: 767px) { 
        padding: 1rem 1rem;
        width: 30%;
    }
`