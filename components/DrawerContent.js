/* eslint-disable prettier/prettier */
import React, {} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';

const styles = StyleSheet.create({
    drawerStyle:{
        flex: 1,
        backgroundColor: 'rgb(28,28,28)',
        height: '100%',
        width: '70%',
    },
    navigationFontStyle: {
        color: 'white',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'left',
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    iconStyle: {
        marginLeft: '1%',
        color:'orange',
    },
    labelStyle: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'monospace',
        fontWeight: 'bold',
    },
});


export function DrawerContent(props) {

  return (
        <View style={styles.drawerStyle}>
            <DrawerContentScrollView {... props}>
            <DrawerItem
                icon = {(color,size) => <FontAwesomeIcon style={styles.iconStyle} size={30} icon={faHome}/>}
                label={()=> { return (<Text style={styles.labelStyle}>Home</Text>);}}
                onPress={() => {props.navigation.navigate('Home');}}
            />
            <DrawerItem
                icon = {(color,size) => <FontAwesomeIcon style={styles.iconStyle} size={30} icon={faBookmark}/>}
                label={()=> { return (<Text style={styles.labelStyle}>Saved</Text>);}}
                onPress={() => {props.navigation.navigate('Favorites');}}
            />
             <DrawerItem
                icon = {(color,size) => <FontAwesomeIcon style={styles.iconStyle} size={30} icon={faUser}/>}
                label={()=> { return (<Text style={styles.labelStyle}>Authors</Text>);}}
                onPress={() => {props.navigation.navigate('Authors');}}
            />
            <DrawerItem
                icon = {(color,size) => <FontAwesomeIcon style={styles.iconStyle} size={30} icon={faBook}/>}
                label={()=> { return (<Text style={styles.labelStyle}>Learn</Text>);}}
                onPress={() => {props.navigation.navigate('Learn');}}
            />
            <DrawerItem
                icon = {(color,size) => <FontAwesomeIcon style={styles.iconStyle} size={30} icon={faInfo}/>}
                label={()=> { return (<Text style={styles.labelStyle}>About</Text>);}}
                onPress={() => {props.navigation.navigate('About');}}
            />
            </DrawerContentScrollView>
        </View>
    );
}
