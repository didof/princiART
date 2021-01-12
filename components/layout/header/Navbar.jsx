import React from 'react'

import { useSelector } from 'react-redux'
import { selectAll } from '@/app/slices/navigation.slice'

import { Flex } from '@/styles/layout/Flex'
import { List } from '@/styles/List'

import NavbarItem from '@/components/layout/header/NavbarItem'

import { motion, useTransform, useViewportScroll } from 'framer-motion'

function buildNavigationTabs(tabs) {
    const navbarItems = Object.entries(tabs).map(([url, data]) => {
        return (
            <NavbarItem
                key={url}
                url={url}
                {...data}
            />
        )
    })

    return (
        <List
            as="ul"
            row
            around
        >
            {navbarItems}
        </List>
    )
}

function Navbar() {
    const { tabs } = useSelector(selectAll)


    return (
        <Flex as="nav" row around>
            {buildNavigationTabs(tabs)}
        </Flex>
    )
}

export default Navbar
