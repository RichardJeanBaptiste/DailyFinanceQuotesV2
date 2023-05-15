/* eslint-disable prettier/prettier */
import React, { } from 'react';
import { View, TouchableOpacity, Share} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons/faShareAlt';


export default function ShareButton(props) {


    const onShare = () => {
        const currentMessage = props.quote + ' - ' + props.name;

        Share.share({
          message: currentMessage,
        });
    };

    return (
        <View>
            <TouchableOpacity onPress={onShare}>
                <FontAwesomeIcon color={props.color} icon={faShareAlt} size={props.size}/>
            </TouchableOpacity>
        </View>
    );
}
