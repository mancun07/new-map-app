import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { countryActions } from '../app/countrySlice'
import classes from './Header.module.scss'

const Header = () => {

    const items = useSelector(state => state.country.items)
    const menuIsShown = useSelector(state => state.country.menuIsShown)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (window.innerWidth > 500) {
            dispatch(countryActions.toggleMenu())
        }
    }, [dispatch])



    const onChangeHandler = (value) => {
        dispatch(countryActions.filterByQuantity(value))
        dispatch(countryActions.toggleMenu())
    }

    const onChangeHandler2 = (value) => {
        dispatch(countryActions.filterByLanguage(value))
        dispatch(countryActions.toggleMenu())
    }

    const mobileMenuHandler = () => {
        dispatch(countryActions.toggleMenu())
    }

    const onlyLanguages = items && items.map(el => {
        const {languages} = el;
        let arr = languages && Object.values(languages)
        let arr2 = arr && arr.length > 1 ? arr.slice(0,1) : arr
        let mainLanguage = arr2 && arr2[0]
        return mainLanguage
    })


    const onlyUnique = (arr) => {
        let newArr =  [];
        for (const el of arr) {
            if (!newArr.includes(el)) {
                newArr.push(el)
            }
        }
        return newArr
    }

    const uniqueLanguages = onlyUnique(onlyLanguages)

    return (
        <div className={classes.header}>
            <h2>Узнай основные факты о стране (всего одним кликом!)</h2>
            <div className={classes.hamb__button} onClick={mobileMenuHandler}></div>
            <div className={`${classes.navbar} ${menuIsShown && classes.navbar__isShown}`}>
                <div className={classes.navbar__item}>
                    <label htmlFor="population">Показать на карте страны с численностью населения:</label>
                    <select name="population" id="population" onChange={(e => onChangeHandler(e.target.value))}>
                        <option value={0}>Все страны</option>
                        <option value={10000000}>Более 10млн человек</option>
                        <option value={30000000}>Более 30млн человек</option>
                        <option value={50000000}>Более 50млн человек</option>
                        <option value={70000000}>Более 70млн человек</option>
                        <option value={100000000}>Более 100млн человек</option>
                    </select>
                </div>
                <div className={classes.navbar__item}>
                    <label htmlFor="language">Показать на карте страны, в которых выбранный ниже язык, является официальным:</label>
                    <select  name="language" id="language" onChange={e => onChangeHandler2(e.target.value)}>
                        <option>Все языки</option>
                    {uniqueLanguages && uniqueLanguages.map((el,i) => {
                        return <option key={i} value={el}>{el}</option>
                    })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header
