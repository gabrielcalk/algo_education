import styled from 'styled-components'

export const StyleNav = styled.nav`
/* Adding a display flex, flex wrap, defining the nav to a row and some margin on the right */
    display:flex;
    flex-wrap:wrap;
    flex-direction: row;
    justify-content: center;
    padding: 5px;
    justify-content: space-around;

    div{
        display: flex;
        flex-direction: row
    }

    /* Adding some color, margin, padding and background animation on the anchors that are inside to the nav tag */
    button {
        text-decoration: none;
        margin-right: 10px;
        background-image: linear-gradient();
        border: 0px;
        border-radius: 5px;
        background-repeat: no-repeat;
        background-size: 100% 0.2em;
        background-position: bottom;
        transition: all 0.25s ease-in;
        position:relative;
        margin:0.4em;  
        padding: 0.6rem;
        background-color: var(--third_color);
        color: var(--first_color);
        transform: translateZ(0);
    }

    /* Adding an animation on the anchors that are inside to the nav tag */
    button:before{
        content: "";
        position:absolute;  z-index:-1;
        top:0; left:0; right:0; bottom: 0;
        background:aqua; color:#33393f; 
        transform: scaleY(0);
        transform-origin: 50% 100%;
        transition: transform 0.5s ease-out;
    }

    /* Changing the color of the anchors when the user pass the mouse */
    button:hover{  color:#33393f;  
    }

    /* Making the background (on the anchors that are inside to the nav tag) go up when you pass the mouse */
    button:hover:before {
        transform: scaleY(1);
        transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    }
`

export const Header = styled.header`
    background-color: var(--third_color);
`