// external
import styled from 'styled-components'

// components
import { ExpandAbsolute, ExpandRelative } from './Expand'

// utils
import { generate } from '@/styles/utils'

export const Flex = styled(ExpandRelative)`
    display: flex;
    flex-direction: ${({ row, column }) => generate.flexDirection(row, column)};
    justify-content: ${({ evenly, around, between }) => generate.justifyContent(evenly, around, between)};
    align-items: ${({ start, end }) => generate.alignItems(start, end)};
`