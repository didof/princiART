import breakpoints from '@/config/general/breakpoints.json'

const useHOC = (method) => (directives) => {
    return Object.entries(breakpoints).map(([device, breakpoint]) => {
        return method(device, directives[device])
    }).join('\n')
}

const media = (device, content) => {
    return `@media (min-width: ${breakpoints[device]}) {
        ${content}
    }`
}

export const useMedia = useHOC(media)

