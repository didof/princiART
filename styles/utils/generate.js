import { guardBooleanParameters } from './guard'

/**
 * @function generate.justifyContent
 * @param {boolean} evenly 
 * @param {boolean} around 
 * @param {boolean} between 
 * @returns {string} justify-content's **value**
 * This helper function gets one of the three avaiable parameters.
 * Ensured that the parameters are valid and not redondant, it returns
 * the appropriate string.
 * Default is *center*.
 */
export function justifyContent(evenly, around, between) {
    guardBooleanParameters(arguments)
    if(evenly) return 'space-evenly'
    if(around) return 'space-around'
    if(between) return 'space-between'
    else return 'center'
}

export function alignItems(start, end) {
    guardBooleanParameters(arguments)
    if(start) return 'flex-start'
    if(end) return 'flex-end'
    else return 'center'
}

export function flexDirection(row, column) {
    guardBooleanParameters(arguments)
    return column ? 'column' : 'row'
}

export function borderColorWithFallback(borderColor, theme) {
    return borderColor ? borderColor: theme.card.border.color
}