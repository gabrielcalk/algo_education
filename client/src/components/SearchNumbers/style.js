import styled from 'styled-components'

export const Container = styled.section`
    margin: 80px 0;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;

    section{
        border: 1px solid black;

        &.checked{
            background-color: var(--second_color)
        }

        &.found{
            background-color: var(--forth_color);
        }
    }
`