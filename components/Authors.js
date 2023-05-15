/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import { Dimensions } from 'react-native';
import { Pressable } from 'react-native';
import { Modal } from 'react-native';
import {SafeAreaView, Text, View, Image, Linking} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import JohnRock from '../assets/J._D._Rockefeller.jpg';
import AndrewCarnegie from '../assets/Andrew_Carnegie.jpg';
import BernardBaruch from '../assets/BARUCH,_BERNARD.jpg';
import Chamath from '../assets/Chamath_Palihapitiya.jpg';
import Cornelius from '../assets/Cornelius_Vanderbilt.jpg';
import JamesSimons from '../assets/James_Simons.jpg';
import JPMorgan from '../assets/JohnPierpontMorgan.png';
import Melody from '../assets/Mellody_Hobson.jpg';
import RobertKiyosaki from '../assets/Robert_Kiyosaki.jpg';
import SuzeOrman from '../assets/SuzeOrman.jpg';
import Warren from '../assets/Warren_Buffett.jpg';
import Graham from '../assets/Benjamin_Graham.jpg';



function AuthorModal(props){
  const [modalVisible, setModalVisible] = useState(false);

  const Styles = {
    authorImage: {
        width: 110,
        height: 160,
        borderRadius: 5,
      },
      cardStyle:{
       flexDirection: 'column',
       width : 110,
       height : 100,
       backgroundColor: 'rgb(75,77,75)',
       borderRadius: 5,
       marginTop: '5%',
       marginLeft: '4%',
      },
      textStyle:{
       color: 'white',
       textAlign: 'center',
       fontWeight: 'bold',
       fontSize: 14,
       fontFamily: 'Mukta-Regular',
       marginTop: '12%',
      },
      modalView: {
       margin: 50,
       backgroundColor: 'rgb(75,77,75)',
       borderRadius: 20,
       padding: 20,
       height: Dimensions.get('window').height - 110,
       alignItems: 'center',
       shadowColor: '#000',
       shadowOffset: {
         width: 0,
         height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
       elevation: 5,
     },
     modalImage: {
       width: '85%',
       height: '55%',
       borderRadius: 5,
     },
     lifeText: {
       textAlign: 'left',
       fontFamily: 'Mukta-Regular',
       color: 'white',
       paddingBottom: '3%',
       fontSize: 13,
     },
     infoText: {
      fontFamily: 'Mukta-Regular',
      color: 'white',
      fontSize: 13,
    },
    modalFooter: {
      flexDirection: 'row',
      marginTop: '6%',
      alignContent: 'center',
      marginLeft: '-5%',
      fontSize: '13',
    },
    footerText: {
      color: 'orange',
      fontFamily: 'Mukta-Regular',
      fontSize: 13,
    },
  };

  return (
      <View style={Styles.cardStyle}>
        <Pressable onPress={() => setModalVisible(true)}>
          <Image
                  style={Styles.authorImage}
                  source={props.authorImage}
          />
        </Pressable>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
          >
              <View style={Styles.modalView}>
                <Image
                    style={Styles.modalImage}
                    source={props.authorImage}
                  />
                 <View style={{marginTop: '5%', flex: 1}}>
                    <Text style={Styles.lifeText}>{props.Born}</Text>
                    <Text style={Styles.lifeText}>{props.Died}</Text>
                    <ScrollView style={{height: '50%'}} contentContainerStyle={{paddingBottom: '15%'}}>
                      <Text style={Styles.infoText}>
                          {props.info}
                      </Text>
                    </ScrollView>
                  </View>
                  <View style={Styles.modalFooter}>
                    <Pressable style={{paddingRight: 35}} onPress={() => {setModalVisible(!modalVisible);}}><Text style={Styles.footerText}>Close</Text></Pressable>
                    <Pressable onPress={() => {Linking.openURL(props.wikiLink);}}><Text style={Styles.footerText}>Wiki</Text></Pressable>
                  </View>
              </View>
          </Modal>
        <Text style={Styles.textStyle}>{props.author}</Text>
      </View>
  );
}

function Authors() {

    const Styles = {
        rowStyle: {
            flexDirection: 'row',
            width: Dimensions.get('window').width - 10,
        },
        rowStyle2: {
            flexDirection: 'row',
            marginTop: '27%',
            width: Dimensions.get('window').width - 10,
        },
        scrollStyle: {
            height: '93%',
        },
    };

    return (
      <SafeAreaView>
        <ScrollView style={Styles.scrollStyle} contentContainerStyle={{paddingBottom: '35%', marginLeft: '-4%'}}>
          <View style={Styles.rowStyle}>
            <AuthorModal
              author = "Warren Buffett"
              authorImage= {Warren}
              Born= "Born - August 30, 1930"
              info= "Warren Edward Buffett is an American investor, business tycoon, philanthropist, and the chairman and CEO of Berkshire Hathaway. He is considered one of the most successful investors in the world and has a net worth of over US$85.6 billion as of December 2020, making him the world's fourth-wealthiest person."
              wikiLink= "https://en.wikipedia.org/wiki/Warren_Buffett"
            />
            <AuthorModal
              author = "Benjamin Graham"
              authorImage = {Graham}
              Born = "Born - May 9, 1894"
              Died = "Died - September 21, 1976"
              info = 'Benjamin Graham was a British-born American economist, professor and investor. He is widely known as the "father of value investing", and wrote two of the founding texts in neoclassical investing: Security Analysis (1934) with David Dodd, and The Intelligent Investor (1949).'
              wikiLink = "https://en.wikipedia.org/wiki/Benjamin_Graham"
            />
            <AuthorModal
              author = "Robert Kiyosaki"
              authorImage = {RobertKiyosaki}
              Born = "Born - April 8, 1947"
              info = "Robert Toru Kiyosaki is an American businessman and author. Kiyosaki is the founder of Rich Global LLC and the Rich Dad Company, a private financial education company that provides personal finance and business education to people through books and videos."
              wikiLink = "https://en.wikipedia.org/wiki/Robert_Kiyosaki"
            />
          </View>
        {/**********************************************************************************************************/}
          <View style={Styles.rowStyle2}>
            <AuthorModal
              author = "Andrew Carnegie"
              authorImage = {AndrewCarnegie}
              Born = "Born - November 25, 1835"
              Died = "Died - August 11, 1919"
              info = "Andrew Carnegie was a Scottish-American industrialist and philanthropist. Carnegie led the expansion of the American steel industry in the late 19th century and became one of the richest Americans in history."
              wikiLink = "https://en.wikipedia.org/wiki/Andrew_Carnegie"
            />
            <AuthorModal
              author = "Mellody Hobson"
              authorImage = {Melody}
              Born = "Born - April 3, 1969"
              info = "Mellody Hobson is an American businesswoman who is the chairwoman of Starbucks Corporation. She was the president and co-CEO of Ariel Investments. She is the former chairwoman of DreamWorks Animation, having stepped down after negotiating the acquisition of DreamWorks Animation SKG, Inc., by NBCUniversal in August, 2016. In 2017, she became the first African-American woman to head The Economic Club of Chicago. She was also named to chair the board of directors of Starbucks in 2021, making her one of the highest profile African American corporate directors."
              wikiLink = "https://en.wikipedia.org/wiki/Mellody_Hobson"
            />
            <AuthorModal
              author = "J.P. Morgan"
              authorImage = {JPMorgan}
              Born = "Born - April 17, 1837"
              Died = "Died - March 31, 1913"
              info = "John Pierpont Morgan was an American financier and banker who dominated corporate finance on Wall Street throughout the Gilded Age. As the head of the banking firm that ultimately became known as J.P. Morgan and Co., he was a driving force behind the wave of industrial consolidation in the United States spanning the late 19th and early 20th centuries."
              wikiLink = "https://en.wikipedia.org/wiki/J._P._Morgan"
            />
          </View>
        {/**********************************************************************************************************/}
        <View style={Styles.rowStyle2}>
          <AuthorModal
            author = "Suze Orman"
            authorImage = {SuzeOrman}
            Born = "Born - June 5, 1951"
            info = 'Susan Lynn "Suze" Orman is an American financial advisor, author, and podcast host. In 1987, she founded the Suze Orman Financial Group. Her work as a financial advisor gained notability with The Suze Orman Show, which ran on CNBC from 2002 to 2015.'
            wikiLink = "https://en.wikipedia.org/wiki/Suze_Orman"
          />
          <AuthorModal
            author = "John D. Rockefeller"
            authorImage = {JohnRock}
            Born = "Born - July 8, 1839"
            Died = "Died - May 23, 1937"
            info = "John Davison Rockefeller Sr. was an American business magnate and philanthropist. He is widely considered the wealthiest American of all time and the richest person in modern history."
            wikiLink = "https://en.wikipedia.org/wiki/John_D._Rockefeller"
          />
          <AuthorModal
            author = "Cornelius Vanderbilt"
            authorImage = {Cornelius}
            Born = "Born - May 27, 1794"
            Died = "Died - January 4, 1877"
            info = "Cornelius Vanderbilt was an American business magnate who built his wealth in railroads and shipping. After working with his father's business, Vanderbilt worked his way into leadership positions in the inland water trade and invested in the rapidly growing railroad industry."
            wikiLink = "https://en.wikipedia.org/wiki/Cornelius_Vanderbilt"
          />
        </View>
         {/**********************************************************************************************************/}
         <View style={Styles.rowStyle2}>
          <AuthorModal
            author = "Jim Simons"
            authorImage = {JamesSimons}
            Born = "Born - April 25, 1938"
            // eslint-disable-next-line jsx-quotes
            info = 'James Harris Simons is an American mathematician, billionaire hedge fund manager, and philanthropist.[4] He is the founder of Renaissance Technologies, a quantitative hedge fund based in Setauket-East Setauket, New York. '
            wikiLink = "https://en.wikipedia.org/wiki/Jim_Simons_(mathematician)"
          />
          <AuthorModal
            author = "Bernard Mannes Baruch"
            authorImage = {BernardBaruch}
            Born = "Born - August 19, 1870"
            Died = "Died - 	June 20, 1965"
            info = "Bernard Mannes Baruch was an American financier and statesman. According to historian Thomas A. Krueger: For half a century Bernard Baruch was one of the country's richest and most powerful men. A great speculator, public official, presidential counselor, political benefactor, and indefatigable almonor, his public life provides a clear view of the inner workings of the American political system."
            wikiLink = "https://en.wikipedia.org/wiki/Bernard_Baruch"
          />
          <AuthorModal
            author = "Chamath Palihapitiya"
            authorImage = {Chamath}
            Born = "Born - September 3, 1976"
            info = "Chamath Palihapitiya  is a Canadian-American venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital. Palihapitiya was born in Sri Lanka, and moved to Canada with his family at the age of six. Palihapitiya was an early senior executive at Facebook, working at the company from 2007 to 2011. Following his departure from Facebook, Palihapitiya started his own fund, The Social+Capital Partnership, through which he invested in several companies, including Yammer and Slack. The Social+Capital Partnership changed its name to Social Capital in 2015"
            wikiLink = "https://en.wikipedia.org/wiki/Chamath_Palihapitiya"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
      );
}

export default Authors;
