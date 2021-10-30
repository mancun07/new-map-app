import { createSlice } from '@reduxjs/toolkit'

export const countrySlice = createSlice({
    name: 'counter',
    initialState: {
        items: [],
        infoIsShown: false,
        chosenCountry: null,
        filteredItems: null,
        menuIsShown: false
    },
    reducers: {
        addDataToRedux: (state, action) => {
            state.items = action.payload
        },
        showInfo: (state, action) => {
            state.infoIsShown = true
        },
        hideInfo: (state, action) => {
            state.infoIsShown = false
        },
        setChosenCountry: (state, action) => {
            state.chosenCountry = action.payload
        },
        clearChosenCountry: (state, action) => {
            state.chosenCountry = null
        },
        filterByQuantity: (state, action) => {
            console.log(action.payload)
            state.filteredItems = state.items.filter(el => {
                return el.population > action.payload
            })
        },
        filterByLanguage: (state, action) => {
            state.filteredItems = state.items && state.items.filter(el => {
                let langs = el.languages && Object.values(el.languages)
         
                return langs && langs.includes(action.payload)
            })
        },
        toggleMenu: (state, action) => {
            state.menuIsShown = !state.menuIsShown
        }
    }

})


export const countryActions = countrySlice.actions;

export default countrySlice.reducer;



