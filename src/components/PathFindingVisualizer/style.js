import styled from 'styled-components'

export const Container = styled.main`
    margin: 80px 0;
    display: grid;
    grid-template-columns: repeat(15, 0fr);
    gap: 1px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    h4{
        display: none;
    }

    @media (max-width:915px){
        h4{
            display: block;
            background: var(--second_color);
            color: var(--first_color);
            padding: 1rem
        }
    }
`