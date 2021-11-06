import {countryActions} from './countrySlice';

export const getData = () => {
    return async (dispatch) => {

        const fetchData = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/all`);
            if (!response.ok) {
                throw new Error('Our customs error')
            }
            const data = await response.json();
            dispatch(countryActions.addDataToRedux(data))
            
        }

        try {
            await fetchData();
        } catch (err) {
            console.log(err)
        }

    }
}

export const getSingleData = (name) => {
    return async (dispatch) => {

        const fetchSingleData = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            if (!response.ok) {
                throw new Error('Our customs error')
            }
            const data = await response.json();
            console.log(data)
            dispatch(countryActions.setChosenCountry(data))
        }

        try {
            await fetchSingleData()
        } catch (err) {
            console.log(err)
        }
    }
}