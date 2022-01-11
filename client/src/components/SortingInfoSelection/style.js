import styled from "styled-components";

export const NameAlgo = styled.h2`
    margin-top: 30px;
    text-align: center;
    text-shadow: 2px 2px var(--forth_color);
`

export const InfoEachAlgo = styled.section`
    margin-top: 70px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    pre{
        margin-left: -170px;
        font-size: 13px;
    }

    div{
        line-height: 2rem;
    }

    section{
        margin:0 2rem;
    }
`

export const Text = styled.article`
    line-height: 3em;
    padding: 0 30px 0 30px;
    
    div{
        padding: 30px 30px;
        margin: 20px -30px 20px -30px;
        background-color: var(--third_color);
        background-size: cover;
        color: var(--first_color);
    }

    span{
        color: var(--second_color);
        font-size: 1.2rem;
    }
`

export const DivFlag = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;

    svg{
        margin: 40px 3px -7px 3px;
    }
`
