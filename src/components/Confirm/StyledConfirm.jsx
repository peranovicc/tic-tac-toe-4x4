import styled from 'styled-components';

export const StyledConfirm = styled.div`
    position: fixed;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    top: 32.5vh;
    left: 15vw;
    transition: all 0.75s ease-in-out;
    transform: translateX(300%);
    height: 35vh;
    width: 70vw;
    text-align: center;
    background-color: rgba(100,100,100,0.95);
    &.open{
        transform: translateX(0);
    }

    p{
        margin-bottom: 2rem;
    }

    .btn-container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        @media (min-width: 767px){
            flex-direction: row;
        }
        *{
            margin-bottom:2px;
        }
    }

    @media (min-width: 767px) { 
        left: 32.5%;
        width: 35%;
    } 

`