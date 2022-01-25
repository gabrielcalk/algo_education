import styled from 'styled-components'

export const Bars = styled.div `
    div {
        margin: 0px 1px;
        display: inline-block;
        background-color: var(--second_color);
        width: 10px;
        font-size: 5px;
    }
`

export const SectionBars = styled.section `
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const SectionRange = styled.section`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`