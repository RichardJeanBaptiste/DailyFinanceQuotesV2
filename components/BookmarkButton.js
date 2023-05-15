/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useEffect, useState, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import { v1 as uuidv1 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons/faBookmark';
import AsyncStorage from '@react-native-async-storage/async-storage';


function BookmarkButton(props) {

    const [currentQuote, setCurrentQuote] = useState(props.quote);
    const [currentAuthor, setCurrentAuthor] = useState(props.author);
    const [bookmarkColor, setBookmarkColor] = useState('white');

    const checkSaved = useCallback(() => {
      const checkIfQuoteSaved = async () => {
        let keys = await AsyncStorage.getAllKeys();
        let values = await AsyncStorage.multiGet(keys);

        let isQuoteSaved = false;
        values.map((value) => {
          try {
            if (JSON.parse(value[1]).quote === currentQuote){
              isQuoteSaved = true;
            }
          } catch (error) {
            console.log(error);
          }

        });

        //console.log(isQuoteSaved);
        if (isQuoteSaved) {
          setBookmarkColor('orange');
        } else {
          setBookmarkColor('white');
        }
    };

      checkIfQuoteSaved();

    },[currentQuote]);

    useEffect(()=> {
        setCurrentQuote(props.quote);
        // check if quote saved then change color
        checkSaved();

    },[currentQuote,setCurrentQuote, props.quote, checkSaved]);


    const storeData = async () => {
        try {

          if (bookmarkColor === 'white') {
            setBookmarkColor('orange');
          }

          let id = uuidv1();

          let quoteToSave = {
              id: id,
              name: currentAuthor,
              quote: props.quote,
          };

          let alreadySaved = false;

          let keys = await AsyncStorage.getAllKeys();
          let values = await AsyncStorage.multiGet(keys);


          values.map((value) => {
            if (JSON.parse(value[1]).quote === currentQuote){
              alreadySaved = true;
              return;
            }
          });

          if (alreadySaved){
            return;
          } else {
            await AsyncStorage.setItem(id, JSON.stringify(quoteToSave));
          }
        } catch (e){
          console.log(e);
        }
    };

    return (
        <TouchableOpacity onPress={storeData}>

            <FontAwesomeIcon
                style={{ color: bookmarkColor}}
                icon={faBookmark}
                size={25}
            />
        </TouchableOpacity>
    );
  }

export default BookmarkButton;
