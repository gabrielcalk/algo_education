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
        justify-content: center;

        @media (max-width: 900px){
            flex-wrap: wrap;
            padding: 0 1rem;
        }

        div{
            flex-direction: column;
            align-items: center;
            margin: 1rem auto;

            pre{
                color: var(--first_color);
                margin-left: -20px;

                @media (max-width: 450px){
                    margin-left: -60px;
                }
            }
        }
    }

    section{
        margin: 2rem 0;
        background-color: var(--first_color);
        padding-top: 6rem;
        
        h3{
            text-align: center;
            color: black;
            margin-bottom: 2rem
        }
        div{
            display: flex;
            justify-content: center;
            padding-bottom: 330px;
        }
    }
`