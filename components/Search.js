/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView,TouchableOpacity, Share, Linking} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons/faShareNodes';
import { faBookmark } from '@fortawesome/free-regular-svg-icons/faBookmark';
import BookmarkButton from './BookmarkButton';
import ShareButton from './ShareButton';
import TweetButton from './TweetButton';
import Divider from './Divider';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Search(props) {

    const [ quotes , setQuotes ] = useState(props.searchresults);
    const [ readyToLoad, setReadyToLoad ] = useState(false);

    useEffect(() => {
        if ( quotes[0] === undefined || quotes === []){
            setReadyToLoad(false);
        } else {
            setReadyToLoad(true);
        }
    },[quotes]);


    const randomKey = () => {
        return (
            uuidv4()
        );
    };




    const SearchResults = () => {

        const RenderSearch = (sprops) => {

            const [ Item, SetItem ] = useState(sprops.data);
            const [ bookmarkColor, setBookmarkColor] = useState('white');

            const onShare = () => {
                const currentMessage = Item.quote + ' - ' + Item.name;

                Share.share({
                  message: currentMessage,
                });
            };

            const tweetOut = () => {
                Linking.openURL('https://twitter.com/intent/tweet?text=' + Item.quote + ' - ' + Item.name);
            };

            useEffect(() => {

                const checkSaved = async () => {

                    let keys = await AsyncStorage.getAllKeys();
                    let values = await AsyncStorage.multiGet(keys);

                    let isQuoteSaved = false;

                    values.map((value) => {
                        try {
                          if (JSON.parse(value[1]).quote === Item.quote){
                            isQuoteSaved = true;
                          }
                        } catch (error) {
                          console.log(error);
                        }
                    });

                    if (isQuoteSaved) {
                        setBookmarkColor('orange');
                    } else {
                        setBookmarkColor('white');
                    }
                };

                checkSaved();

            },[Item.quote]);


            const storeData = async () => {
                try {

                  if (bookmarkColor === 'white') {
                    setBookmarkColor('orange');
                  }

                  let id = uuidv4();

                  let quoteToSave = {
                      id: id,
                      name: Item.name,
                      quote: Item.quote,
                  };

                  let alreadySaved = false;

                  let keys = await AsyncStorage.getAllKeys();
                  let values = await AsyncStorage.multiGet(keys);

                  values.map((value) => {
                    if (JSON.parse(value[1]).quote === Item.quote){
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
                <View style={{ display:'flex', flexDirection: 'row', marginTop: '3%', paddingBottom: '3%'}}>
                    <View style={{ width: '90%', marginLeft: '6%'}}>
                        <Text style={{ color: 'white', fontSize: 20}}>{Item.quote}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '7%', marginLeft: '-3%'}}>

                            <TweetButton color={'rgb(29,161,242)'} quote={Item.quote} name={Item.name.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())}/>

                            <View style={{ paddingLeft: '8%', paddingRight: '8%' }}>
                                <BookmarkButton quote={Item.quote} author={Item.name.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())}/>
                            </View>


                            <ShareButton color={'white'} size={25} quote={Item.quote} name={Item.name.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())} />


                        </View>

                        <View style={{ marginTop: '8%'}}>
                            <Divider/>
                        </View>

                    </View>
                </View>
            );
        };

        return (
            <View style={{ height: '90%', width: '100%', marginTop: '3%'}}>
                <Text style={{ color: 'white', marginLeft: 'auto', marginRight: 'auto', fontSize:24, textDecorationLine: 'underline'}}>{quotes[0].name.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())}</Text>
                <View style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '4%', height: '87%'}}>
                    <ScrollView>
                        {
                            quotes.map((item)=> <RenderSearch data={item} key={item._id}/>)
                        }
                    </ScrollView>
                </View>
            </View>
        );
    };

    if (!readyToLoad) {

        return (
            <View/>
        );
    } else {
        return (
            <SearchResults/>
        );
    }

}
