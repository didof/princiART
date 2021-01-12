import React from 'react'
import Image from 'next/image'

function Picture({ body }) {
    const { filename, ext } = body

    return (
        <div>
            <Image
                src={`/images/pictures/${filename}.${ext}`}
                width={300}
                height={300}
            />
        </div>
    )
}

Picture.getInitialProps = async ({ query }) => {
    const { filename, ext } = query

    // TODO based on extention, retrieve from different folder
    // default to png

    const response = await fetch(`http://localhost:3000/api/pictures/getOne?which=${filename}`)
    const body = await response.json()

    return { body }
}

export default Picture
