import { createSlice } from '@reduxjs/toolkit'

export const countrySlice = createSlice({
    name: 'country',
    initialState: {
        items: [],
        infoIsShown: false,
        chosenCountry: null,
        filteredItems: null,
        menuIsShown: false,
        loading: false,
        error: null
    },
    reducers: {
        addDataToRedux: (state, action) => {
            state.items = action.payload
        },
        showInfo: (state) => {
            state.infoIsShown = true
        },
        hideInfo: (state) => {
            state.infoIsShown = false
        },
        setChosenCountry: (state, action) => {
            state.chosenCountry = action.payload
        },
        clearChosenCountry: (state, action) => {
            state.chosenCountry = null
        },
        filterByQuantity: (state, action) => {
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
        toggleMenu: (state) => {
            state.menuIsShown = !state.menuIsShown
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }

})


export const countryActions = countrySlice.actions;

export default countrySlice.reducer;



