import styled from 'styled-components'
import { motion } from 'framer-motion'

import { media, generate, common } from '@/styles/utils'

const cardCommon = `
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    
    border-style: solid;
`

export const Card = styled(motion.article)`
    ${cardCommon}

    background-color: ${({ theme }) => theme.card.backgroundColor};

    border-width: ${({ theme }) => theme.card.border.width}px;
    border-color: ${({ borderColor, theme }) => generate.borderColorWithFallback(borderColor, theme)};

    ${({ directives }) => directives && media.useMedia(directives)}
    ${({ centerContent }) => common.centeredContent};
`