import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Flex } from '@/styles/layout/Flex'
import styled from 'styled-components'

function handleStart(controls) {
    
}

function Animation() {
    const controls = useAnimation()

    controls.start({
        x: '100%',
        backgroundColor: '#f00',
        transition: { duration: 1 }
    })

    return (
        <Flex>
            <Box animate={controls} />
            <button onClick={handleStart.bind(controls)}>start</button>
        </Flex>
    )
}

const Box = styled(motion.div)`
    width: 50px;
    height: 50px;
    background-color: red;
`

export default Animation
