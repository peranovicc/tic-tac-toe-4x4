import styled from 'styled-components';

export const StyledSettings = styled.div`

    z-index: 1;
    transition: all 1.1s ease-in-out;
  
    position: fixed;
    min-height: 98vh;
    padding-top: 2vh;
    width: 100vw;
    text-align: center;
    background-color: rgba(100,100,100,0.95);
    @media (min-height: 700px) and (min-width: 400px){
        min-height: 92vh;
        padding-top: 8vh;
    }
    &.closed{
        transition: all 0.5s ease-in-out;
        transform: translateY(100%);
    }

    * {
        text-align: center;
    }
    h2{
        margin-bottom: 1rem;
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
        margin-bottom: 0.5rem;
        @media (min-height: 700px){
            margin-bottom: 1rem;
        }
    }
    .shape{
        margin: 1px auto;
        width: 150px;
        border-bottom: 2px solid #3d3c3a;
        &:hover{
            background-color: grey;
        }
    }
    button{
        margin: 1px;
    }
 
    img{
        height: 150px;
        margin: 3px;
        @media (min-height: 700px) and (min-width: 400px){
            height: 170px;
        }
        @media (min-height: 800px) and (min-width: 450px){
            height: 200px;
        }
        @media (max-height: 570px){
            height: 100px
        }
        @media (max-width: 300px){
            height: 100px;
        }
    }
 
`

