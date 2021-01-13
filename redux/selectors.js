export const getCellState = store => store.cells

export const getCategory = store => getCellState(store) ? getCellState(store).cells : []

export const getCellByName = (store, name) => getCellState(store) ? {...getCellState(store).cell[name], name} : {}

export const getCells = store => getCategory(store).map(name => getCellByName(store, name))