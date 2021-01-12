export const previewsVariants = {
    visible: i => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
        }
    }),
    hidden: { x: -100, opacity: 0 }
}