import React from 'react'
import Switch from '@/components/reusables/interactables/switches/Switch'

import { useSelector, useDispatch } from 'react-redux'
import { selectIsActive, toggle } from '@/app/slices/darkMode.slice'

function handleToggleDarkMode(dispatch) {
    dispatch(toggle())
}

function DarkModeButton() {
    return <div></div>
    const isActive = useSelector(selectIsActive)
    const dispatch = useDispatch();

    return (
        <Switch
            state={isActive}
            actions={{
                onClick: handleToggleDarkMode.bind(null, dispatch)
            }}
        />
    )
}

export default DarkModeButton
