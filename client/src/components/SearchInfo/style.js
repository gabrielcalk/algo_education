import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
`

export const TitleLegend = styled.h2`
    text-align: center;
`

export const DivLegend = styled.div`
    width: 1rem;
    height: 1rem;
    display: inline-block;

    &.check_legend{
        background-color: var(--third_color);
    }

    &.found_legend{
        background-color: var(--forth_color);
    }

    &.start_legend{
        background-color: var(--second_color);
    }
    
    &.startAfter_legend{
        background-color: #e3256b;
    }
    
    &.end_legend{
        background-color: lightblue;
    }

    &.endAfter_legend{
        background-color: #4169E1;
    }

    &.middle_legend{
        background-color: var(--third_color);
    }
`