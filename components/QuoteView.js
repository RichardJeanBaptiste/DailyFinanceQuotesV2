/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity, Dimensions, VirtualizedList, SafeAreaView, FlatList} from 'react-native';
import Divider from './Divider';
import TweetButton from './TweetButton';
import BookmarkButton from './BookmarkButton';
import ShareButton from './ShareButton';
import QuoteModal from './QuoteModal';
import Item from './Item';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = {
    root: {
        width: windowWidth,
        height: windowHeight,
    },
    quoteView: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '85%',
        marginTop: '7%',
    },
    textStyle1: {
        color: 'white',
    },
    titleView: {
        marginLeft: '5%',
        width: '70%',
    },
    title: {
        fontSize: 20,
        textAlign: 'left',
        marginTop: '8%',
    },
    subtitle: {
        textAlign: 'left',
        fontSize: 15,
    },
    quote: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: '15%',
    },
    imageView: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

};


export default function QuoteView(props) {

    const [ QuoteData, setQuoteData ] = useState([]);
    //const [ ItemCount, setItemCount ] = useState(10);
    //const [ ViewData, setViewData ] = useState([]);


    useEffect(() => {
        //console.log(props.stateData[0]);
        // let x = shuffle(props.stateData);
        // let y = x.splice(0, 20);
        // console.log(y);
        setQuoteData(shuffle(props.stateData));
        //console.log('set data');


    },[props.stateData]);


    function shuffle (array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const getItemCount = (data) => 10;


    const getItem = (data,index) => ({
        key: Math.random().toString(12).substring(0),
        name: data[`${index + 1}`].name,
        quote: data[`${index + 1}`].quote,
        image: data[`${index + 1}`].image,
        bio: data[`${index + 1}`].bio,
    });

    /*
    const loadMoreData = () => {
        let x = props.stateData.splice(0, 20);
        let y = QuoteData;
        y.push(x);
        setQuoteData(y);
    }
    */
    const QuoteList = () => {

        const onScrollEnd = (e) =>  {
            let contentOffset = e.nativeEvent.contentOffset;
            let viewSize = e.nativeEvent.layoutMeasurement;

            // Divide the horizontal offset by the width of the view to see which page is visible
            //let pageNum = Math.floor(contentOffset.x / viewSize.width);
            //console.log('scrolled to page ', pageNum);
        };


        return (
            <SafeAreaView>
                <VirtualizedList
                    data={QuoteData}
                    initialNumToRender={5}
                    renderItem={({ item }) => <Item name={item.name} quote={item.quote} image={item.image} bio={item.bio}/>}
                    keyExtractor={item => item.key}
                    getItemCount={getItemCount}
                    getItem={getItem}
                    horizontal={true}
                    pagingEnabled={true}
                    //onMomentumScrollEnd={onScrollEnd}
                    onEndReachedThreshold={0.5}
                    //onEndReached={loadMoreData}
                />
            </SafeAreaView>
        );
    };





    if  (QuoteData === [] || QuoteData[0] === undefined) {
        return <View/>;
    } else {
        return <QuoteList/>;
    }

}

/**
 * 
 */

/**
 * const Item = ({ name, quote, image , bio, Id }) => {

        const [ modalVisible, setModalVisible ] = useState(false);

        const displayModal = () => {
            let show = modalVisible ? 'block' : 'none';

            return ({
              display: show,
            });
        };

        return  (
            <View style={styles.root}>
                <View style={styles.quoteView}>

                    <View style={styles.imageView}>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(true);
                            //console.log(modalVisible);
                            //console.log(name);
                        }}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: image,
                                }}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>

                        <View style={styles.titleView}>
                            <Text style={[styles.textStyle1 , styles.title]}>{name.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())}</Text>
                            <Text style={[ styles.textStyle1 , styles.subtitle]}>{bio.occupation}</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: '8%'}}>
                        <Divider/>
                    </View>

                    <View style={displayModal}>
                        <QuoteModal modalVisible={modalVisible} setModalVisible={setModalVisible} author={name.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())} imageUrl={image} bio={bio}/>
                    </View>


                    <View style={{ marginTop: '5%'}}>
                        <ScrollView style={{ height: '60%', paddingBottom: '5%' }}>
                            <Text style={[styles.textStyle1 , styles.quote]}>{quote}</Text>
                        </ScrollView>
                    </View>

                    <View style={{ marginTop: '2%'}}>
                        <Divider/>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>

                        <TweetButton color={'rgb(29,161,242)'} quote={quote} name={name.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())}/>

                        <View style={{ paddingLeft: '5%', paddingRight: '5%'}}>
                            <BookmarkButton quote={quote} author={name.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())}/>
                        </View>

                        <ShareButton quote={quote} author={name} size={24} color={'white'}/>

                    </View>
                </View>
            </View>
        );
    };
 * 
 */