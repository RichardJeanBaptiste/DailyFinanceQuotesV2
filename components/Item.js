/* eslint-disable prettier/prettier */

import React, {useEffect, useState, memo } from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import Divider from './Divider';
import TweetButton from './TweetButton';
import BookmarkButton from './BookmarkButton';
import ShareButton from './ShareButton';
import QuoteModal from './QuoteModal';

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

const Item = React.memo(({ name, quote, image , bio, Id }) => {

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
});

export default Item;
