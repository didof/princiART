import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Flex } from './layout/Flex'
import { centeredContent } from '@/styles/utils/common'

export const List = styled(Flex)`
    ${centeredContent}
    list-style: none;
`

export const MotionList = styled(motion.li)`
    ${centeredContent}
    list-style: none
`