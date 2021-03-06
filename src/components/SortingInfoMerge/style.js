import styled from "styled-components";

export const NameAlgo = styled.h2`
    margin-top: 30px;
    text-align: center;
    text-shadow: 2px 2px var(--forth_color);
`

export const InfoEachAlgo = styled.section`
    margin-top: 60px;
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

    section{
        display: flex;
        justify-content: center
    }
    
    img{
        width: 30%;
        margin: 35px 0;
        border: 1px solid var(--forth_color);
        border-radius: 5px;
    }
`

export const DivFlag = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;

    svg{
        margin: 30px 1.5rem 0px 1.5rem;
        opacity: 0.9;
        transition: opacity 0.2s
    }

    svg:hover{
        opacity: 1
    }
`

export const MainContainer = styled.main`
    padding-bottom: 220px;
`
