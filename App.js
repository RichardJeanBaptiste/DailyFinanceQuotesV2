/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useState } from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './components/DrawerContent';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import Quotes from './components/Quotes';
import Bookmark from './components/Bookmark';
import Authors from './components/Authors';
import Learn from './components/Learn';
import About from './components/About';
import Search from './components/Search';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  Modal,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const MyTheme = {
  dark: false,
  colors: {
    primary: 'white',
    background: 'rgb(28,28,28)',
    //card: 'rgb(255, 255, 255)',
    text: 'white',
    fontFamily: 'Mukta-Regular',
    //border: 'transparent',
    notification: 'rgb(255, 69, 58)',
  },
};


//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const SearchComponent = (props) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [ text, onChangeText ] = useState('');

  const OpenQuoteModal = () => {
    setModalVisible(true);
  };

  const SearchForAuthor = ({navigation}) => {

    let uri = 'https://financequotesapi.herokuapp.com/quotes/' + text;

    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        if (data === []){
          //console.log('empty');
        } else {
          setModalVisible(false);
          props.goToSearchScreen(data);
          onChangeText('');
        }
      });
  };


  if (!modalVisible) {
    return (
      <Pressable onPress={OpenQuoteModal}>
        <FontAwesomeIcon style={{ color: 'white', marginRight: 20, marginTop: 5}} size={23} icon={faMagnifyingGlass}/>
      </Pressable>
    );
  } else {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ backgroundColor: '#2d3439', height: Dimensions.get('window').height}}>
            <View style={{ display: 'flex', flexDirection: 'row',marginLeft: 10}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ marginTop: 13.5}}>
                <FontAwesomeIcon style={{ color: 'white'}} size={20} icon={faArrowLeft}/>
              </TouchableOpacity>
              <TextInput
                style={{ backgroundColor: '#2d3439', marginLeft: 15, width: 350, color: 'white', fontSize: 18}}
                onChangeText={onChangeText}
                value={text}
                placeholder="Searching for an author?"
                placeholderTextColor={'white'}
                autoFocus={true}
                onSubmitEditing={SearchForAuthor}
              />
            </View>
        </View>
      </Modal>
    );
  }
};

const HomeStackScreen = ({ navigation }) => (
  <Quotes/>
);

const BookmarkScreen = ({ navigation }) => (
  <Bookmark/>
);

const AuthorScreen = ({ navigation }) => (
  <Authors/>
);

const LearnScreen = ({ navigation }) => (
  <Learn/>
);

const AboutScreen = ({ navigation }) => (
  <About/>
);

const SearchScreen = ({ navigation }) => (
  <Search/>
);



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    //backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: 'rgb(28,28,28)',
    height: '100%',
    width: '100%',
  };

  /******* Modal ********************************************************************/

  const [modalVisible, setModalVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  //const [showSearchResults, setShowSearchResults] = useState(false);

  const SearchModel = () => {

    const [ text, onChangeText ] = useState('');

    const OpenQuoteModal = () => {
      setModalVisible(true);
    };

    const SearchForAuthor = () => {
      let uri = 'https://financequotesapi.herokuapp.com/quotes/' + text;

      fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        if (data === []){
          //console.log('empty');
        } else {
          //setModalVisible(false);
          //props.goToSearchScreen(data);
          setSearchResults(data);
          onChangeText('');
        }
      })
      .catch((e) => {
        console.log('Something Went Wrong');
        console.log(e);
      });
    };

    if (!modalVisible) {
      return (
        <Pressable onPress={OpenQuoteModal}>
          <FontAwesomeIcon style={{ color: 'white', marginRight: 20, marginTop: 5}} size={23} icon={faMagnifyingGlass}/>
        </Pressable>
      );
    } else {
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
           <View style={{ backgroundColor: '#2d3439', height: Dimensions.get('window').height}}>
              <View style={{ display: 'flex', flexDirection: 'row',marginLeft: 10}}>
                <TouchableOpacity onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                    style={{ marginTop: 13.5}}
                  >
                  <FontAwesomeIcon style={{ color: 'white'}} size={20} icon={faArrowLeft}/>
                </TouchableOpacity>
                <TextInput
                  style={{ backgroundColor: '#2d3439', marginLeft: 15, width: 350,color: 'white', fontSize: 18}}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="Searching for an author?"
                  placeholderTextColor={'white'}
                  autoFocus={true}
                  onSubmitEditing={SearchForAuthor}
                  //onSubmitEditing={() => setShowSearchResults(true)}
                />
              </View>
              <Search searchresults={searchResults}/>
          </View>
        </Modal>
      );
    }

  };



  /**********************************************************************************/

  return (
    <NavigationContainer theme={MyTheme} >
        <Drawer.Navigator initialRouteName="Daily Finance" drawerContent={(props) => <DrawerContent {...props} />} screenOptions={({ navigation }) => ({
            headerLeft : () => (
              <Pressable onPress={() => navigation.openDrawer()}>
                <FontAwesomeIcon style={{ marginLeft:'10%', color:'white' }} size={20} icon={faBars}/>
              </Pressable>
            ),
            headerRight : () => (
              <SearchModel/>
            ),

        })} >
          {/* Remeber to add drawer item in DrawerContent.js for new screens*/}
          <Drawer.Screen name="Home" component={HomeStackScreen} options={{ title: 'Daily Finance', headerTitleAlign: 'center'}}/>
          <Drawer.Screen name="Favorites" component={BookmarkScreen} options={{ title: 'Bookmarks', headerTitleAlign: 'center'}}/>
          <Drawer.Screen name="Authors" component={AuthorScreen} options={{ title: 'Authors', headerTitleAlign: 'center'}}/>
          <Drawer.Screen name="Learn" component={LearnScreen} options={{ title: 'Learn', headerTitleAlign: 'center'}}/>
          <Drawer.Screen name="About" component={AboutScreen} options={{ title: 'About', headerTitleAlign: 'center'}}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
