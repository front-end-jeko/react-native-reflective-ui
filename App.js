import { useFonts } from 'expo-font';
import { BlurView } from '@react-native-community/blur';

import React from 'react';
import {
 Platform,
 ScrollView,
 StatusBar,
 StyleSheet,
 View,
} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

import { Camera, CameraType } from 'expo-camera';

import Tabs from './components/Tabs';
import Post from './components/Post';
import Header from './components/Header';
import Story from './components/Story';

if (Platform.OS === 'android') {
 StatusBar.setTranslucent(true);
 StatusBar.setBackgroundColor('transparent');
}

const App = () => {
 const [fontsLoaded] = useFonts({
  MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
  MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
 });

 if (fontsLoaded) {
  return (
   <View style={styles.screenContainer}>
    <MaskedView
     style={styles.maskViewStyle}
     maskElement={
      <>
       <Header />
       <Story />
       <ScrollView>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
       </ScrollView>
       <Tabs />
      </>
     }>
     <Camera style={{ flex: 1 }} type={CameraType.back}></Camera>
     <BlurView
      style={styles.blurViewStyle}
      blurType='light'
      blurAmount={20}
      reducedTransparencyFallbackColor='white'
     />
    </MaskedView>
   </View>
  );
 }

 return null;
};

export default App;

const styles = StyleSheet.create({
 screenContainer: {
  flex: 1,
  backgroundColor: 'black',
 },
 maskViewStyle: {
  flex: 1,
  flexDirection: 'row',
 },
 blurViewStyle: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  flex: 1,
 },
});