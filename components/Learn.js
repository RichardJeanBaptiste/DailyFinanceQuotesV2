/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { } from 'react';
import {SafeAreaView, Text, StyleSheet, View, Image, Linking, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { v1 as uuidv1 } from 'uuid';

const windowWidth = Dimensions.get('window').width;
//const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    titleStyle : {
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleView: {
        marginLeft: '2%',
    },
});

const DATA = [
    {
        id: uuidv1(),
        title: 'The Intelligent Investor',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL.jpg',
        author: 'Warren Buffett',
        amazonLink : 'https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661',
    },
    {
        id: uuidv1(),
        title: 'Security Analysis',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51hwLfcPJPL._SX324_BO1,204,203,200_.jpg',
        author: 'Benjamin Graham & \nDavid L. Dodd',
        amazonLink: 'https://www.amazon.com/Security-Analysis-Foreword-Buffett-Editions/dp/0071592539',
    },
    {
        id: uuidv1(),
        title: 'Rich Dad Poor Dad',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg',
        author: 'Robert Kiyosaki',
        amazonLink: 'https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194',
    },
    {
        id: uuidv1(),
        title: 'Think and Grow Rich',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg',
        author: 'Napoleon Hill',
        amazonLink: 'https://www.amazon.com/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331',
    },
    {
        id: uuidv1(),
        title: 'The Laws Of Wealth',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41oihc1tcGL._SX310_BO1,204,203,200_.jpg',
        author: 'Dr.Daniel Crosby',
        amazonLink: 'https://www.amazon.com/Laws-Wealth-Psychology-investing-success/dp/0857195247/ref=sr_1_1?crid=5PBKIMFODAUB&dchild=1&keywords=daniel+crosby&qid=1609708769&sprefix=daniel+cr%2Caps%2C167&sr=8-1',
    },
    {
        id: uuidv1(),
        title: 'Thinking, Fast and Slow',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41wI53OEpCL._SX332_BO1,204,203,200_.jpg',
        author: 'Daniel Kahneman',
        amazonLink: 'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555/ref=sr_1_1?crid=1YR8JLK8INSXB&dchild=1&keywords=thinking+fast+and+slow+by+daniel+kahneman&qid=1609709007&sprefix=thinking+fast+an%2Caps%2C166&sr=8-1',
    },
    {
        id: uuidv1(),
        title: 'Principles',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41Mq7Ss7lPL._SX331_BO1,204,203,200_.jpg',
        author: 'Ray Dalio',
        amazonLink: 'https://www.amazon.com/Principles-Life-Work-Ray-Dalio/dp/1501124021/ref=sr_1_3?crid=3R64OI2MS70PK&dchild=1&keywords=principles+by+ray+dalio&qid=1609709357&sprefix=principl%2Caps%2C168&sr=8-3',
    },
    {
        id: uuidv1(),
        title: 'The Book on Rental \nProperty Investing',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51XQNoIYSvL._SX333_BO1,204,203,200_.jpg',
        author: 'Brandon Turner',
        amazonLink: 'https://www.amazon.com/Book-Rental-Property-Investing-Intelligent/dp/099071179X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
    },
    {
        id: uuidv1(),
        title: 'The Man Who Solved the \nMarket: How Jim Simons Launched the Quant Revolution',
        image: 'https://m.media-amazon.com/images/I/51XscjmkiNL.jpg',
        author: 'Gregory Zuckerman',
        amazonLink: 'https://www.amazon.com/Man-Who-Solved-Market-audiobook/dp/B07VLBSWDC/ref=sr_1_1?crid=3H21HTMDL4631&dchild=1&keywords=the+man+who+solved+the+market&qid=1622338560&sprefix=the+man+who+solved+%2Caps%2C258&sr=8-1',
    },
    {
        id: uuidv1(),
        title: 'The Psychology of Money: Timeless lessons on wealth, greed, and happiness',
        image: 'https://i.ebayimg.com/images/g/y6cAAOSwjaJiX6QD/s-l500.jpg',
        author: 'Morgan Housel',
        amazonLink: 'https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681',
    },
];

function buyBook(amazonLink){
    Linking.openURL(amazonLink);
}


function BookView(props) {

    return (
        <View style={{flexDirection: 'row', paddingBottom: '5%'}}>
            <Image
                style={{width: 100, height: 150}}
                source={{
                    uri: props.item.image,
                }}
            />
            <View style={{marginLeft: '4%', width: windowWidth - 125}}>
                <Text style={{color: 'white',fontSize: 17,fontFamily: 'monospace', fontWeight: 'bold'}}>{props.item.title}</Text>
                <Text style={{color: 'white', fontFamily: 'monospace'}}>- {props.item.author}</Text>
                <TouchableOpacity style={{marginTop: '7%'}} onPress={() => buyBook(props.item.amazonLink)}>
                    <FontAwesomeIcon style={{color: 'orange', width:70}} size={20} icon={faShoppingCart}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}


function Learn(){
    return (
        <SafeAreaView>
            <View style={styles.titleView}>
                <Text style={styles.titleStyle}>Reading is the gateway skill that makes all other learning possible</Text>
                <Text style={styles.titleStyle}> - Barack Obama</Text>
            </View>
            <ScrollView style={{marginTop: '6%', marginLeft: '3%', height: '80%'}} contentContainerStyle={{ paddingBottom: '10%'}}>
                {
                    DATA.map((x)=> <BookView item={x} key={x.id}/>)
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default Learn;
