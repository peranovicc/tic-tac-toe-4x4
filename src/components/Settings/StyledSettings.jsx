import styled from 'styled-components';

export const StyledSettings = styled.div` 
    transition: all 0.5s ease-in-out;
  
    position: fixed;
    min-height: 90vh;
    padding-top: 10vh;
    width: 100vw;
    background-color: rgba(100,100,100,0.95);
    &.closed{
        transition: all 0.5s ease-in-out;
        transform: translateY(100%);
    }
    * {
        text-align: center;
    }
    h2{
        margin-bottom: 2rem;
        text-shadow: 0.5px 0.5px black;
    }
    
    button{
        display: block;
        height: 3rem;
        width: 60%;
        color: #393e46;
        background-color: #ffd369;
        border: 1px solid #222831;
        margin: 1rem auto;
        cursor: pointer;

        &:hover{
            background-color: #fcc546;
        }
        &:active{
            background-color: #f6b214;
        }
        @media (min-width: 767px) { 
            display: inline-block;
            padding: 1rem 2rem;
            width: 11rem;
            margin: 1rem;
            margin-bottom: 5rem;
        }
    }
    h3{
        display: none;
        @media (min-width: 767px) { 
            display: block;
            text-shadow: 0.5px 0.5px black;
        }
    }
    p{
        display: none;
        @media (min-width: 767px){
            display: block;
            text-shadow: 0.5px 0.5px black;
            width: 50%;
            min-height: 1.5rem;
            margin: auto;
            margin-bottom: 3rem;
        }
    }
    ol li{
        text-align: left;
    }
    h4{
        margin-bottom: 1rem;
    }
    .shape{
        margin: 1px auto;
        width: 150px;
        border-bottom: 1px solid grey;
        &:hover{
            background-color: grey;
        }
    }
`

