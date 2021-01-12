// externals
import styled from 'styled-components'

// components
import { ExpandRelative } from './Expand'

// utils
import { media, generate } from '@/styles/utils'

export const Grid = styled(ExpandRelative)`
    display: grid;

    grid-auto-flow: dense;

    grid-auto-rows: minmax(min-content, max-content);

    column-gap: 20px;
    row-gap: 20px;
`

export const ResponsiveGrid = styled(Grid)`
    justify-content: ${({ evenly, around, between }) => generate.justifyContent(evenly, around, between)};
    align-items: ${({ start, end }) => generate.alignItems(start, end)};

    ${({ directives }) => directives && media.useMedia(directives)}
`