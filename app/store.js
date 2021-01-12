import { configureStore } from '@reduxjs/toolkit'

import darkMode from '@/app/slices/darkMode.slice'
import navigation from '@/app/slices/navigation.slice'
import language from '@/app/slices/language.slice'

const store = configureStore({
    reducer: {
        darkMode,
        navigation,
        language
    }
})

export default store