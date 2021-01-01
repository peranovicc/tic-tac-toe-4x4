import styled from 'styled-components';

export const StyledGame = styled.div`
    text-align: center;
`

export const StyledFields = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    column-gap: 1px;
    row-gap: 1px;
    max-width: 200px;
    margin: auto;
`

export const StyledField = styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: rgb(120, 230, 188);
    text-align: center;
`
