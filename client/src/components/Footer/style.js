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
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .divAbout{
        width: 45%;
    }

    .divLinks{
        display: flex;
        flex-direction: column;

        ul li{
            list-style: none;
            text-decoration: none;
        }
    }

    .sectionLinks{
        display: flex;
        justify-content: center;
    }
`