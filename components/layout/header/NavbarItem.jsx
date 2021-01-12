import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectActiveUrl, change } from '@/app/slices/navigation.slice'

import styled from 'styled-components'
import { motion } from 'framer-motion'

function handleChangeUrl(dispatch, url) {
    dispatch(change({ url }))
}

function NavbarItem({ url, label }) {
    const activeUrl = useSelector(selectActiveUrl)
    const dispatch = useDispatch();

    let StyledComponent = Tab;
    if (url === activeUrl) {
        StyledComponent = ActiveTab;
    }

    return (
        <StyledComponent
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleChangeUrl.bind(null, dispatch, url)}
        >
            {label}
        </StyledComponent>
    )
}

const Tab = styled(motion.li)`
    cursor: pointer;

    border-radius: 5px;

    padding: 4px 8px;
    background-color: ${({ theme }) => theme.header.navbar.tabs.backgroundColor};
`

const ActiveTab = styled(Tab)`
    background-color: ${({ theme }) => theme.header.navbar.tabs.activeBackgroundColor};
`

export default NavbarItem
