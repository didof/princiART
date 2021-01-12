// react
import React from 'react'

// directives
import { gridDirectives } from '@/config/layout/pictures.index'

// style
import { expand, grid, flex } from '@/styles/layout'
const { Flex } = flex
const { Container } = expand
const { ResponsiveGrid } = grid

// components
import PicturePreview from '@/components/specific/pictures.index/PicturePreview'

function renderPicturePreview(pictureList) {
    return pictureList.map(({ title, filename, ext, mainColor }, index) => (
        <PicturePreview
            key={index}
            data={{
                index,
                title,
                mainColor,
                filename,
                ext,
            }}
        />
    ))
}

const Pictures = ({ pictures }) => (
    <Container>
        <ResponsiveGrid
            as='ul'
            directives={gridDirectives}
        >
            {renderPicturePreview(pictures)}
        </ResponsiveGrid>
    </Container>
)

Pictures.getInitialProps = async () => {
    const response = await fetch('http://localhost:3000/api/pictures/get')
    const body = await response.json()
    return { pictures: body }
}

export default Pictures
