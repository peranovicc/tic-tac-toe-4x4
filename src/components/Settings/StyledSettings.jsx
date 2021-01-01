import styled from 'styled-components';

export const StyledSettings = styled.div` 
    transition: all 1.1s ease-in-out;
  
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
    .btn-container{
        display: flex;
        width: 70%;
        text-align: center;
        align-items: center;
        flex-direction: column;
        margin: auto;
        @media (min-width: 767px) { 
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
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
    button{
        margin: 5px;
    }
`

