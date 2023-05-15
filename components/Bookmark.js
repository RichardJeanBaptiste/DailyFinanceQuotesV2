/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {SafeAreaView, Text, View, Share} from 'react-native';
import 'react-native-get-random-values';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons/faTrashAlt';
//import { faShareAlt } from '@fortawesome/free-solid-svg-icons/faShareAlt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShareButton from './ShareButton';


function Bookmark(){

  const Styles = {
    card: {
        borderRadius: 7,
        marginTop: '2%',
        backgroundColor: 'rgb(75,77,75)',
        height: '50%',
        //flex: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    cardButtons : {
        alignItems:'flex-end',
        marginRight: '4%',
        marginLeft: '4%',
        flexDirection: 'column',
    },
    quoteStyle : {
        color: 'white',
        flex : 3,
        fontSize: 15,
        marginTop: 10,
        marginLeft: 10,
        width: '70%',
        paddingBottom: '7%',

    },
    trashIcon : {
        fontSize: 25,
        color: 'orange',
        paddingTop: 10,
        paddingBottom: 15,
    },
    shareIcon : {
        fontSize: 25,
        color: 'orange',
    },
  };

  const [list, setList] = useState([]);

  // Get all saved quotes on intial component render
  useEffect(() => {

    const getSavedQuotes = async () => {

      let keys = await AsyncStorage.getAllKeys();
      let values = await AsyncStorage.multiGet(keys);
      let temp = [];

      values.map((value) => {
        temp.push({id: value[0], quote: value[1] });
      });
      setList(temp);
    };

    getSavedQuotes();
  },[]);

  // Get all quotes when screen is focused
  useFocusEffect(
    React.useCallback(()=> {

      const getSavedQuotes = async () => {

        let keys = await AsyncStorage.getAllKeys();
        let values = await AsyncStorage.multiGet(keys);
        let temp = [];

        values.map((value) => {
          //console.log(value);
          temp.push({id: value[0], quote: value[1] });
        });
        setList(temp);
      };

      getSavedQuotes();

    },[])
  );

    function RenderQuotes(props) {
        const [ Item, SetItem] = useState(props.data);

        // Share Button Function
        const shareQuote = () => {
            Share.share({
              message: JSON.parse(Item.quote).quote + '\n' + '- ' + JSON.parse(Item.quote).name.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase()),
            });
        };

        // Remove quote from flatlist/asyncstorage
        const removeBookmark = () => {
            //console.log(Item.id);
            AsyncStorage.removeItem(Item.id);
            setList(list.filter((itemList) => {return itemList.id !== Item.id;}));
        };

        const JText = () => {
            if (list.length === 0){
              return (
                <View/>
              );
            } else {
                return (
                    <View>
                        <Text style={{ color: 'white'}}>
                            {JSON.parse(Item.quote).quote}
                            {'\n'}
                            {'\n'}
                            - {JSON.parse(Item.quote).name}
                        </Text>
                    </View>
                );
            }
        };

        return (
          <View  style={{ marginTop: '3%', marginLeft: '1%' , width: '97%', height: 110, backgroundColor: 'rgb(75,77,75)', borderRadius: 7}}>
              <View style={{ width: '95%', display: 'flex', flexDirection: 'row', paddingBottom: '3%'}}>

              <ScrollView style={{ marginLeft: '3%', marginTop: '2%'}}>
                  <JText/>
              </ScrollView>


              <View style={{ marginLeft: '4%', marginTop: '6%'}}>

                  <ShareButton color={'white'} size={20} quote={JSON.parse(Item.quote).quote} name={JSON.parse(Item.quote).name.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())}/>

                  <TouchableOpacity onPress={removeBookmark} style={{ marginTop: 15}} >
                    <FontAwesomeIcon style={Styles.trashIcon} size={20} icon={faTrashAlt}/>
                  </TouchableOpacity>
              </View>

            </View>
          </View>
      );
    }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{ height: '100%'}}>
          {
            list.map((item)=> <RenderQuotes data={item} key={item.id}/>)
          }
      </ScrollView>
    </SafeAreaView>
  );
}

export default Bookmark;

