function filterOutUndefinedFromList(list) {
    return Object.values(list).filter(function (argument) {
        return typeof argument !== 'undefined'
    })
}

function ensureAllAreBoolean(list) {
    if (!list.every(function (value) {
        return typeof value === 'boolean'
    })) throw Error('You should only pass the name of the prop.')
}

function ensureOnlyOneTrue(list) {
    if (list.filter(function (booleanValue) {
        return booleanValue && booleanValue
    }).length > 1) throw Error('You should pass only one of the permitted options')
}

export function guardBooleanParameters(list) {
    const values = filterOutUndefinedFromList(list)
    if (values.length == 0) return;

    ensureAllAreBoolean(values)

    ensureOnlyOneTrue(values)
}