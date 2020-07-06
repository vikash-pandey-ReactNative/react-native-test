/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
 SafeAreaView,
 StyleSheet,
 Image,
 View,
 Button,
 Text,
 Dimensions
} from 'react-native';

class App extends React.Component {
 
 
 render() {
   return (
     <>
       
         
           <MainPart />
        
       
     </>
   )
 }
}

class MainPart extends React.Component {
 state={
   screenWidth: null,
   screenHeight: null,
 }

 onLayout(e) {
   console.log("Screen Orientation Changed...")
   this.setState({
     screenWidth: Dimensions.get('window').width,
     screenHeight: Dimensions.get('window').height
   })

 }
 render(){
   const {screenHeight, screenWidth} = this.state
   return(
     <SafeAreaView style={screenHeight > screenWidth ? styles.ContainerPortrait : styles.ContainerLandscape} onLayout={this.onLayout.bind(this)}>
     
     <Image source={require('./assets/location_icon_topbar.png')} style={styles.topImage}/>
     <Image source={require('./assets/img_sort.png')} style={styles.bottomImage}/>
       <View>
       <Text style={styles.text}>TITLE</Text>
       <Text style={styles.textCenter}>no 277 3rd main kengeri satallite town kengeri Banglaore india </Text>
       
              
              <View style={styles.buttonContainer}>
             
                <Text style={styles.myButton}>Edit</Text>
                <Text style={styles.myButton}>Delete</Text>
              </View>
            
              
          </View>
       
   
   
         
     </SafeAreaView>
   )
 }
 
}

const styles = StyleSheet.create({
 Container: {
   flex: 1,

 },
 ContainerPortrait: {
   flex: 1,
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center'
 },
 ContainerLandscape: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center'
 },
 
 text: {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20
  
},
textCenter: {
 
  textAlign: 'center',
  marginLeft:30,
  marginRight:30,
  fontSize: 16
  
},
buttonContainer: {
    marginTop:30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    
   
  
},
topImage: {

  width: 50,
  height: 50,
  margin: 30,
  justifyContent: 'flex-end',
  position: "absolute", 
  top: 0, right: 0
  
},
bottomImage: {

  width: 50,
  height: 50,
  margin: 30,
  justifyContent: 'flex-end',
  position: "absolute", 
  bottom: 0, right: 0
  
},
myButton:{
  width: 80,
  height: 50,
  padding: 15,
  borderRadius:20,
  backgroundColor:'orange',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 16
}
});

export default App;