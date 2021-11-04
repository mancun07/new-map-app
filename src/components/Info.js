import React, {Fragment} from 'react'
import { countryActions } from '../app/countrySlice'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import classes from './Info.module.scss'

const Info = () => {

    const dispatch = useDispatch();
    const chosenCountry = useSelector(state => state.country.chosenCountry)


    const clickHandler = () => {
        dispatch(countryActions.hideInfo())
        dispatch(countryActions.clearChosenCountry())
    }

    const numberWithSpaces = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let convertedNumbersPopulation; 
    let totalArea;

    if (chosenCountry) {
        convertedNumbersPopulation = numberWithSpaces(chosenCountry[0].population) 
        totalArea = numberWithSpaces(chosenCountry[0].area) 
    }


    return (
        <Fragment>
        { chosenCountry && 
        <motion.div initial={{y: '-100vh'}} animate={{y: 0}} className={classes.info}>
       <div className={classes.title}>
           <div>{chosenCountry[0].name.common}</div> <br/>
           <img src={chosenCountry[0].flags.svg}/>
        </div>
       <div className={classes.main}>
            <div>Столица: {chosenCountry[0].capital}</div>
            {/* <div>Площадь: {totalArea + 'км2'}</div> */}
            <div>Движение на дороге: {chosenCountry[0].car.side}</div>
            <div>Официальные языки в стране: {Object.values(chosenCountry[0].languages).map((el,i, arr) => { return i !== arr.length - 1 ? <span key={i}>{el}{', '}</span> : <span key={i}>{el}</span>
            })}</div>
            <div>Население: {convertedNumbersPopulation}</div>
            <div>Валюта: {Object.values(chosenCountry[0].currencies).map((el, i) => {
                return <span key={i}>{el.name}({el.symbol})</span>
            })}</div>
            <div>Местное время: {chosenCountry[0].timezones}</div> 
       </div>
            <button onClick={clickHandler}>Скрыть</button>
        </motion.div>  }
        </Fragment>
    )
}

export default Info