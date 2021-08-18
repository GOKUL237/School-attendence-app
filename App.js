import * as React from "react"
import {View,Text,Button}from "react-native"
import {createAppContainer,createSwitchNavigator}from"react-navigation"
import HomeScreen from "./Screens/HomeScreen"
import SummaryScreen from "./Screens/SummaryScreen"
 
 export default class App extends React.Component{
render(){
  return(
<View> 
<AppContainer/>
</View>

  )
}

 }
 const switchScreen=createSwitchNavigator({
   HomeScreen:{screen:HomeScreen},
   SummaryScreen:{screen:SummaryScreen}
 })
 const AppContainer= createAppContainer(switchScreen)