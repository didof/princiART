import { createSlice } from '@reduxjs/toolkit'

import themes from '@/app/json/theme.json'

const initialState = {
    isActive: false,
    theme: themes[0]
}

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isActive = !state.isActive
            state.theme = Boolean(state.isActive) ? themes[1] : themes[0]
        }
    }
})

export const selectIsActive = (state) => state.darkMode.isActive
export const selectTheme = (state) => state.darkMode.theme

export const { toggle } = darkModeSlice.actions

export default darkModeSlice.reducer