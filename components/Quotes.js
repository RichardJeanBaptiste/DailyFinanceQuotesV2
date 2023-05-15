/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useReducer} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import QuoteView from './QuoteView';
import LoadScreen from './LoadScreen';
import { INITIAL_STATE, loadReducer } from './loadReducer';



export default function Quotes() {

  const [Data,  setData] = useState([]);

  const [ state, dispatch ] = useReducer(loadReducer, INITIAL_STATE);

  useEffect(() => {

    dispatch({ type: 'Fetch_Start'});

    fetch('https://financequotesapi.herokuapp.com/quotes/all/')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'Fetch_Success', payload:data});
    })
    .catch((e) => {
      dispatch({ type: 'Fetch_Error'});
    });

  },[]);

  function Loading(){

    useEffect(() => {
      if (Data === []){
        fetch('https://financequotesapi.herokuapp.com/quotes/all/')
        .then((response) => response.json())
        .then((data) => {
          if (data === []) {
            dispatch({ type: 'Fetch_Start'});
          } else {
            dispatch({ type: 'Fetch_Success', payload:data});
          }
        })
        .catch((e) => {
          dispatch({ type: 'Fetch_Error'});
        });
      }
    },);

    return (
      <View>
          <LoadScreen/>
      </View>
    );
  }

  function Error(){

    useEffect(() => {
      if (Data === []){
        fetch('https://financequotesapi.herokuapp.com/quotes/all/')
        .then((response) => response.json())
        .then((data) => {
          if (data === []) {
            dispatch({ type: 'Fetch_Start'});
          } else {
            dispatch({ type: 'Fetch_Success', payload:data});
          }
        })
        .catch((e) => {
          dispatch({ type: 'Fetch_Error'});
        });
      }
    },);

    return (
      <View>
          <Text style={{ color: 'white' }}>Something Went Wrong...</Text>
      </View>
    );
  }


  if (state.loading) {

    return (
      <Loading/>
    );

  } else if (state.error) {
    return (
      <Error/>
    );
  } else {
    return (
      <QuoteView stateData={state.Data}/>
    );
  }

}

