import styled from 'styled-components'

export const Footer = styled.footer`
    width: 100%;
    background-color: var(--third_color);
    color: var(--first_color);
    padding: 15px;
    position: absolute;
    bottom: 0;

    .sectionAboutAndLinks{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .divAbout{
        width: 45%;

        @media (max-width: 600px){
            width: 70%;
        }
    }

    .sectionLinks{
        display: flex;
        justify-content: center;
        gap: 2rem;
        a{
            svg{
                color: var(--first_color);
            }
        }
    }
`