import styled from 'styled-components'

export const Footer = styled.footer`
    
    background-color: var(--third_color);
    color: var(--first_color);
    padding: 25px;
    position: absolute;
    right: 0;
    bottom: 80;
    left: 0;

    .sectionAboutAndLinks{
        display: flex;
        justify-content: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .divAbout{
        width: 30%;
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
        margin-top: 40px;
        display: flex;
        justify-content: center;
    }
`