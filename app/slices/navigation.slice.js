import { createSlice } from '@reduxjs/toolkit'

import navigation from '@/app/json/navigation.json'

function retrieveNavigationTabsByLanguage(language) {
    return navigation[language]
}

const initialState = {
    activeUrl: '/',
    tabs: retrieveNavigationTabsByLanguage('ita')
}

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        change: (state, action) => {
            state.activeUrl = action.payload.url
        }
    }
})

export const selectActiveUrl = (state) => state.navigation.activeUrl
export const selectActiveAs = (state) => state.navigation.activeAs
export const selectTabs = (state) => state.navigation.tabs
export const selectAll = state => state.navigation

export const { change } = navigationSlice.actions

export default navigationSlice.reducer