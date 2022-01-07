import React from 'react'
import {useDispatch} from 'react-redux';
import { countryActions } from '../app/countrySlice';
import { getSingleData } from '../app/actions';
import classes from './Marker.module.scss'

const Marker = (props) => {

    const dispatch = useDispatch()

    const clickHandler = (name) => {
        dispatch(countryActions.showInfo())
        dispatch(getSingleData(name))
    }

    return (
        <div className={classes.marker} onClick={() => clickHandler(props.name)}>
            <i className="fas fa-map-pin" style={{color: 'yellow', padding: '10px'}}></i>
        </div>
    )
}

export default Marker
