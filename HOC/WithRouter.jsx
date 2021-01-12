import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useSelector } from 'react-redux'
import { selectActiveUrl, selectActiveAs } from '@/app/slices/navigation.slice'

const WithRouter = (WrappedComponent) => (wrappedComponentProps) => {
    const router = useRouter();
    const url = useSelector(selectActiveUrl)
    useEffect(() => {
        router.push(url)
    }, [url])

    return <WrappedComponent {...wrappedComponentProps} />
}

export default WithRouter
