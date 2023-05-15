/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, {useState} from 'react';
import {View, Modal, Text, StyleSheet, Image, ScrollView, Pressable, Linking} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons/faWikipediaW';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons/faCircleXmark';
import Divider from './Divider';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  modalView: {
    margin: 20,
    marginTop: '-20%',
    height: 550,
    width: 350,
    backgroundColor: 'rgb(28,28,28)',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Mukta-Regular',
    textTransform: 'capitalize',
  },
  imageStyle: {
    width: 100,
    height: 100,
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-2%',
  },
  scrollView: {
    marginHorizontal: 20,
    width: 325,
  },
  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    paddingBottom: 13,
  },
  modalHeaderDesc: {
    display: 'flex',
    flexDirection: 'column',
  },
  modalDesc: {
    width: 300,
    marginTop: 30,
    color: 'white',
    fontSize: 18,
    fontFamily: 'Mukta-Regular',
  },
  fullView: {
    width: '100%',
    height: '100%',
  },
  iconStyle: {
    fontSize: 25,
    color: 'white',
    width: 70,
    marginLeft: '9%',
  },
  closeIcon: {
    fontSize: 25,
    color: 'red',
    width: 70,
    marginTop: '3%',
  },
});

export default function QuoteModal(props) {

  const [modalVisible, setModalVisible] = useState(false);

  const goToWiki = (link) => {
    Linking.openURL(link);
  };

  return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
          onRequestClose={() => {
            setModalVisible(!props.modalVisible);
          }}>
              <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                      <ScrollView style={styles.scrollView}>

                          <View style={styles.modalHeader}>
                            <View style={styles.modalHeaderDesc}>
                              <Text style={styles.modalText}>{props.author}</Text>
                              <Text style={{ color: 'white'}}>{props.bio.life}</Text>
                            </View>
                              <Image
                                  style={styles.imageStyle}
                                  source={{
                                    uri: props.imageUrl,
                                  }}
                              />
                          </View>
                          <Divider/>
                              <View>
                                <Text style={{ marginTop: 9, color: 'white', fontSize: 16 }}>Short Bio</Text>
                                <Text style={styles.modalDesc}>{props.bio.desc}</Text>
                              </View>
                          <View style={{ marginTop: 40}}>
                            <Divider/>
                          </View>
                      </ScrollView>

                      <View style={{ display: 'flex', flexDirection: 'row'}}>
                          <Pressable onPress={() => goToWiki(props.bio.wiki)}>
                              <FontAwesomeIcon style={styles.iconStyle} icon={faWikipediaW}  size={23}/>
                          </Pressable>

                          <Pressable onPress={() => props.setModalVisible(!props.modalVisible)}>
                            <FontAwesomeIcon style={styles.closeIcon} icon={faCircleXmark} size={20}/>
                          </Pressable>

                      </View>
                      </View>
              </View>
        </Modal>
      </View>
  );
}
