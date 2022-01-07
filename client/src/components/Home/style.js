import styled from 'styled-components'

export const Container = styled.main`
    section{
        opacity: 0;
        transform: translateX(100px);
        transition: 2200ms;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 8rem;
        
        &:last-child{
            margin-bottom: 8rem;
        }

        img{
            width: 28rem;
            height: 24rem;
            border-radius: 0.5rem;
        }

        div{
            margin: 0 auto;
            width: 30rem;

            h2, p{
                text-align: center;
            }
        }
    }

    section.show{
        transform: translateX(0);
        opacity: 1;
    }

`