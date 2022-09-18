import { createGlobalStyle } from 'styled-components';
import background from '../../../apps/images/valorant-background.jpg';
import font from '../../../apps/fonts/Valorant-Font.woff';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "myFont" ;
        src: url(${font}) format("woff");
    }
	
    body{
        font-family: 'VALORANT', sans-serif;
        
	}
    html{
        background: url(${background}) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        
        

    }
`;

export default GlobalStyle;
