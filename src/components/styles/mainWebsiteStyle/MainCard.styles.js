import { createGlobalStyle } from 'styled-components';
import background from '../../../apps/images/valorant-background.jpg';

const GlobalStyle = createGlobalStyle`

    
	
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
