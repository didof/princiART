import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateSizes } from '@/app/slices/test'

import useWindowSize from '@/hooks/useWindowSize'

const handleCommunicateWithSlice = (dispatch, action, width, height) => {
    dispatch(action({ width, height }))
}

const RenderDynamicGrid = ({ selector, action, children }) => {
    const { width, height } = useWindowSize()
    const dispatch = useDispatch()

    useEffect(() => {
        handleCommunicateWithSlice(dispatch, action, width, height)
    }, [width, height])

    const { columnsAmount, item } = useSelector(selector)

    return children({ columnsAmount, item })
}

export default RenderDynamicGrid