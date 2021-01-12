import React from 'react'

import { motion } from 'framer-motion'
import styled from 'styled-components'

function Contacts() {
    const list = {
        visible: {
            opacity: 1, transition: {
                when: 'beforeChildren',
                staggerChildren: 0.3,
            }
        },
        hidden: {
            opacity: 0, transition: {
                when: 'afterChildren'
            }
        },
    }

    const item = {
        visible: i => ({
            opacity: 1, x: 0, transition: {
                delay: i * 0.3
            }
        }),
        hidden: { opacity: 0, x: -100 },
    }

    return (
        <Center>
            <Ul
                variants={list}
                initial="hidden"
                animate="visible"
            >
                {[1, 2, 3].map((el, i) => <Li custom={i} variants={item}>{el}</Li>)}
            </Ul>
        </Center>
    )
}

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Ul = styled(motion.ul)`
    list-style: none;
    width: 300px;
    background-color: grey;
    padding: 10px;
`

const Li = styled(motion.li)`
    width: 280px;
    background-color: white;
    padding: 10px;
    border-top: 1px solid black;
`

export default Contacts
