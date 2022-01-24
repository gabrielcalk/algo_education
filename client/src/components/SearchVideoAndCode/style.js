import styled from 'styled-components'


export const Container = styled.section`
    margin-top: 2rem;
    padding-top: 2rem;
    background-color: var(--third_color);

    h3{
        text-align: center;
        color: var(--forth_color);
    }

    div{
        width: 100%;
        display: flex;
        div{
            flex-direction: column;
            align-items: center;
            margin: 0 auto;

            pre{
                color: var(--first_color);
            }
        }
    }

    section{
        margin: 5rem 0;
        background-color: var(--second_color);
        padding-top: 6rem;
        
        h3{
            text-align: center;
            color: var(--first_color);
            margin-bottom: 3rem
        }
        div{
            display: flex;
            justify-content: center;
            padding-bottom: 330px;
        }
    }
`