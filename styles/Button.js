import styled from 'styled-components'

import { allArgumentsAreBoolean } from './helper'

export const Button = styled.button`
    background-color: ${({ theme }) => theme.header.buttons.backgroundColor};

    border-style: none;
    border-radius: ${({ sharp, blunt, rounded }) => generateBorderRadius(sharp, blunt, rounded)};
    
    outline: none;
`

// TODO add control
function generateWidthHeight(px) {
    return `${px ? px : 24}px`
}

function generateBorderRadius(sharp, blunt, rounded) {
    allArgumentsAreBoolean(arguments);
    if(sharp) return '0'
    if(blunt) return '15px'
    if(rounded) return '50%';
}

export const SquaredButton = styled(Button)`
    width: ${({ px }) => generateWidthHeight(px)};
    height: ${({ px }) => generateWidthHeight(px)};
`