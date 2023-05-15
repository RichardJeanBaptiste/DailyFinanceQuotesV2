/* eslint-disable prettier/prettier */
import React, {} from 'react';
import {TouchableOpacity, Linking, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

export default function TweetButton(props) {

    const tweetOut = () => {
        Linking.openURL('https://twitter.com/intent/tweet?text=' + props.quote + ' - ' + props.name);
    };

    return (
        <View>
            <TouchableOpacity onPress={tweetOut}>
                <FontAwesomeIcon style={props.buttonStyle} icon={faTwitter} size={23} color={props.color}/>
            </TouchableOpacity>
        </View>
    );
}
