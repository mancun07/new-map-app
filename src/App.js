import React, {useEffect} from 'react';
import './App.css';
import Map from './components/Map';
import Header from './components/Header';
import Loader from './components/Loader';
import Info from './components/Info';
import {getData} from './app/actions'
import {useDispatch, useSelector} from 'react-redux';
import Notification from './components/Notification';

function App() {
    const infoIsShown = useSelector(state => state.country.infoIsShown)
    const loading = useSelector(state => state.country.loading)
    const error = useSelector(state => state.country.error)

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getData());
  }, [dispatch])

  return (
    <div className="app">
      <Header/>
      {loading && <Loader />}
      <Map/>
      {infoIsShown && <Info/>}
      {error && <Notification error={error} />}
    </div>
  );
}

export default App;
