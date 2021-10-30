import React, {useEffect} from 'react';
import './App.css';
import Map from './components/Map';
import Header from './components/Header';
import Loader from './components/Loader';
import Info from './components/Info';
import {getData} from './app/actions'
import {useDispatch, useSelector} from 'react-redux';

function App() {
    const infoIsShown = useSelector(state => state.country.infoIsShown)
    const items = useSelector(state => state.country.items)

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getData());
  }, [dispatch])

  return (
    <div className="app">
      <Header/>
      {!items.length && <Loader />}
      <Map/>
      {infoIsShown ? <Info/> : false}
    </div>
  );
}

export default App;
