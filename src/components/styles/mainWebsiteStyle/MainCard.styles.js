import { createGlobalStyle } from 'styled-components';
import font1 from '../../../apps/fonts/valorant_font-webfont.woff2';
import font2 from '../../../apps/fonts/valorant_font-webfont.woff';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'valorantregular';
    src: url(${font1}) format('woff2'),
         url(${font2}) format('woff');
    font-weight: normal;
    font-style: normal;
}


    body{
        font-family: 'valorantregular';
        padding: 0;
        margin: 0;
        flex-wrap: wrap;
        height: 100vh;
        width: 100vw;
        
	}
`;

export default GlobalStyle;
