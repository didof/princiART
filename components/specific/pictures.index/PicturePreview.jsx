import React from 'react'
import Image from 'next/image'

import { useDispatch } from 'react-redux'
import { change } from '@/app/slices/navigation.slice'

import { Card } from '@/styles/Card'
import { flex } from '@/styles/layout'
const { Flex } = flex

import { previewWidths } from '@/config/layout/pictures.index'

import DelayedItem from '@/components/reusables/animated/list/items/Delayed'

import { previewsVariants } from '@/config/animations/pictures.index'

import styled from 'styled-components'

const ImageContainer = styled.div`
    position: relative;
    height: 200px;
    width: 100%;
`

function handleChangeUrl(dispatch, url) {
    dispatch(change({ url }))
}

function PicturePreview({ data }) {
    const { index, title, mainColor, filename, ext } = data
    const dispatch = useDispatch()
    return (
        <DelayedItem
            index={index}
            directives={previewsVariants}
        >
            <Card
                borderColor={mainColor}
                directives={previewWidths}
                onClick={handleChangeUrl.bind(null, dispatch, `/pictures/${filename}?ext=${ext}`)}
            >
                <ImageContainer>
                    <Image
                        src={`/images/pictures/${filename}.${ext}`}
                        alt={title}
                        layout='fill'
                        objectFit='cover'
                    />
                </ImageContainer>
            </Card>
        </DelayedItem>
    )
}

export default PicturePreview


// TODO prefetch of first three images