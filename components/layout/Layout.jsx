// react
import React from 'react'

// redux
import { compose } from 'redux'

import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/Footer'

import { expand, flex } from '@/styles/layout'
const { ExpandAbsolute } = expand
const { Flex } = flex

import styled from 'styled-components'

// HOC
import withTheme from '@/HOC/WithTheme'
import withRouter from '@/HOC/WithRouter'

function Layout({ children }) {
    return (
        <ExpandAbsolute>
            <Flex column between>
                <Header />
                <Main
                    as="main"
                >
                    {children}
                </Main>
                <Footer />
            </Flex>
        </ExpandAbsolute>
    )
}

const Main = styled(Flex)`
    background-color: ${({ theme }) => theme.backgroundColor}
`

export default compose(
    withTheme,
    withRouter,
)(Layout)
