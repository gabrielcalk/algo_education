import styled from 'styled-components'

export const Container = styled.main`
    margin: 80px 0;
    display: grid;
    grid-template-columns: repeat(15, 0fr);
    gap: 1px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width:736px){
        flex-wrap: nowrap;
    }
`