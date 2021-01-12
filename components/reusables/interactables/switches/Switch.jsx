import React from 'react'

import styled from 'styled-components'
import { Flex } from '@/styles/layout/Flex'
import { motion } from 'framer-motion'

const Back = styled(Flex)`
    background-color: ${({ theme }) => theme.header.switches.backgroundColor};
    width: 60px;
    height: 30px;
    padding: 0 5px;
    border-radius: 13px;
`

const Handle = styled(motion.div)`
    background-color: ${({ theme }) => theme.header.switches.handleColor};
    width: 25px;
    height: 25px;
    border-radius: 50%;
`

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
}

function calculateAlignItem(boolean) {
    return { alignItems: 'flex-' + (boolean ? 'start' : 'end')}
}

const Switch = ({ state, actions }) => (
    <Back style={calculateAlignItem(state)}>
        <Handle
            layout
            transition={spring}
            {...actions}
        />
    </Back>
)

export default Switch
