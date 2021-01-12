import React from 'react'

import { MotionList } from '@/styles/List'

function DelayedItem({ index, directives, children }) {
    return (
        <MotionList
            custom={index}
            variants={directives}
            initial="hidden"
            animate="visible"
        >
            {children}
        </MotionList>
    )
}

export default DelayedItem
