import styled from 'styled-components'

export const Bars = styled.div `
    div {
        margin: 0px 1px;
        display: inline-block;
        background-color: var(--second_color);
        width: 10px;
        font-size: 5px;
    }

    @media (max-width: 915px){
        display: none;
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
        @media (max-width:915px){
            .slide, h5{
                display: none;
            }
        }
    }

`

export const Container = styled.main`
    h4{
        display: none;
    }  

    @media (max-width:915px){
        h4{
            display: flex;
            background: var(--second_color);
            color: var(--first_color);
            padding: 1rem;
            justify-content: center;
            margin: 3rem 1rem -8rem 1rem;
        }
    }
`