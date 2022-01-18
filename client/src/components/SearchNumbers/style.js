import styled from 'styled-components'

export const Container = styled.section`
    padding: 0px 12rem;
    margin: 7rem 0px;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;

    section{
        width: 3rem;
        border: 1px solid black;

        &.checked{
            background-color: var(--third_color);
            color: var(--first_color);
        }

        &.found{
            background-color: var(--forth_color);
        }

        &.start{
            background-color: var(--second_color);
        }
        
        &.startAfter{
            background-color: #e3256b;
        }
        
        &.endAfter{
            background-color: #4169E1;
        }
        
        &.end{
            background-color: lightblue;
        }

        &.middle{
            background-color: var(--third_color);
            color:var(--first_color);
        }

        h3{
            padding: 0.2rem;
            text-align: center;
            font-size: 1.3rem;
        }
    }
`