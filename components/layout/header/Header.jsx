import React from 'react'

import Navbar from '@/components/layout/header/Navbar'
import DarkModeButton from '@/components/layout/header/DarkModeButton'

import styled from 'styled-components'
import { Flex } from '@/styles/layout/Flex'

function Header() {
    return (
        <Wrapper>
            <Flex column between>
                <Flex row between>
                    <WebsiteName>
                        princiART
                </WebsiteName>
                    <DarkModeButton />
                </Flex>
                <Navbar />
            </Flex>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    width: 100vw;

    padding: 0 2%;

    background-color: ${({ theme }) => theme.header.backgroundColor}
`

const WebsiteName = styled.h1`
    font-size: 32px;
    padding: 10px;
`

export default Header
