import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native';
import {Entypo, Inonicons,FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
export default class Inspiring extends React.Component{

constructor(props){
  super(props);

  this.state={
    qoute:[
      {text:"Even the smartest machines are blind",author:"Fiele"},
      {text:"Even the smartest machines are blind",author:"Fiele"},
    ],
    story:[
      {title:'Stop wasting your time complaining',body:'People visit a wise man complaining about the same problems over and over again. One day, he decided to tell them a joke and they all roared with laughter.After a few minutes, he told them the same joke and only a few of them smiled.Then he told the same joke for a third time, but no one laughed or smiled anymore.The wise man smiled and said: ‘You can’t laugh at the same joke over and over. So why are you always crying about the same problem?'}
    ],
    showQoute:false,
  }
}

componentWillMount(){
  this.fetchData();
  this.fetchstory();
}

fetchData=async()=>{
  const respnose=await fetch('https://type.fit/api/quotes?author=Abraham')
  const json=await respnose.json();
  this.setState({qoute:json})
}

fetchstory=async()=>{
  const respnose=await fetch('http://192.168.1.8:5000//shortstories.json')
  const json=await respnose.json();
  this.setState({story:json})
}

handleToggleButton=()=>{
  this.setState((state)=>({
    showQoute:!state.showQoute,
  }));
}



  render(){
    const {qoute,story,showQoute}=this.state
    const randomNumber=Math.floor((Math.random() * 1643) + 1)

    return (
      <View style={styles.container}>
        <View style={styles.navview}>
              <Entypo
              style={{paddingTop:28}}
              name='light-up'
              color='#F1F1F2'
              size={20}
              />
              <Text style={styles.navtext}>Inspiring Qoutes</Text>
          </View>
        <View style={styles.titleview}>
              <Text style={styles.titletext1}>You are not tired.</Text>
              <Text style={styles.titletext2}>You are uninspired.</Text>
              <Text style={{color:'#C1E1DC'}}>Get your Inspiring Qoute</Text>
              <View style={{paddingTop:10}}>
              <TouchableOpacity style={{padding:5, backgroundColor:'#00293C',borderRadius:20,width:100}}
              onPress={this.handleToggleButton}>
              <Text style={{color:'white',textAlign: 'center',justifyContent:'center'}}>Inspire me</Text>
              </TouchableOpacity>
              </View>
              <View>

                  {this.state.showQoute===true &&(
                    <View style={{justifyContent:'center',alignItems:'center',padding:20,flex:2}}>
                  <View style={{backgroundColor: '#e6f2ff'}}>    
                  <Text style={{textAlign:'center',fontSize:13,fontWeight:'bold',fontFamily:'sans-serif-condensed',paddingBottom:2}}> {this.state.story[0].title} </Text>
                    <Text style={{textAlign:'center',fontSize:12,fontFamily:'normal',}}> {this.state.story[0].body} </Text>
                    </View>
                    <View style={{backgroundColor:'#e6f2ff',padding:10}}>
                    <Text style={{textAlign:'center',fontSize:11,fontFamily:'sans-serif-medium'}}>" {this.state.qoute[randomNumber].text} "</Text>
                    <Text style={{textAlign:'center',fontSize:11,fontFamily:'sans-serif-medium'}}>-{this.state.qoute[randomNumber].author}</Text>
                    </View>
                    </View>
                  )}
                  </View>
          </View>
        </View>
    );
  }



}


const styles=StyleSheet.create({
  navview:{
      backgroundColor:'#00293C',
      height:57,
      flexDirection:'row',
      paddingLeft:5
  },

  navtext:{
    color:'#F1F1F2',
    fontFamily:'sans-serif-thin',
    fontWeight:'bold',
    paddingTop:28,
    paddingBottom:10,
    paddingLeft:5,
    fontSize:14,

    //flexDirection:'row'

},
container:{
    flex:1,
    //backgroundColor: '#F1F1F2',
    backgroundColor: '#FCFDFE',
},
titleview:
 {
     //marginTop:30,
     //flex:1,
     //flexDirection:'row',
     justifyContent:'center',
     alignItems: 'center',
     color:'#ffffff',
     position: 'absolute',
     top: 0, left: 0,
     right: 0, bottom: 0,
 },
 titletext1:{
     color:"#00293C",
     //fontFamily:'sans-serif-thin',
     fontWeight:'bold',
     fontSize:25,
    alignItems:'center',
   textAlign: 'center',
     top: 0, left: 0,
     right: 0, bottom: 0,
 },
titletext2:{
     color:"#00293C",
     //fontFamily:'sans-serif-thin',
     fontWeight:'bold',
     fontSize:18,
    alignItems:'center',
   textAlign: 'center',
     top: 0, left: 0,
     right: 0, bottom: 0,
 },


})
