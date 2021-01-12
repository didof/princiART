import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeLanguage: 'ita',
    availableLanguages: ['ita', 'en-US']
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        change: (state, action) => {
            state.activeLanguage = action.payload.language
        }
    }
})

export const selectActiveLanguage = (state) => state.languages.activeLanguage
export const selectAvailableLanguages = (state) => state.languages.availableLanguages

export const { change } = languageSlice.actions

export default languageSlice.reducer