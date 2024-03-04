npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack @react-navigation/drawer @react-navigation/material-top-tabs react-native-tab-view

@react-navigation/bottom-tabs --> these are the bottoms tab like  --> Main,Notification,inbox
@react-navigation/native-stack --> when we open a screen on top of another screen that's basically a stack of screens 

npx expo install react-native-screens react-native-safe-are-context react-native-gesture-handler react-native-reanimated react-native-pager-view 

react-native-screens react-native-safe-are-context --> these are peer dependencies that we need to install in order to navigation to function correctly in our application 


in order to work these dependencies work correctly we need to go babel.config.js file add this below plugin

plugins: ["react-native-reanimated/plugin"]



if we want to change the skin of the app like using app in dark mode we need to go app.json

change the key word "userInterfaceStyle":"light" --> "userInterfaceStyle":"automatic" 


<SafeAreaView /> agr hum safe are view use nhi kare ge simple <View /> use kare ge toh text ko mobile ke edge pe le gae ga or full uper se start kare ga but <SafeAreView /> asa nhi krta


goes to icons to expo 

https://icons.expo.fyi




 Stack navigation --> sometimes we want to navigate from let's say from a tweet to another screen and we can use stack navigator for that 
 its a stack of screen like you put screen on top of another screen and then keep going when you go back pop last screen in same order



 React Navigation --> The cool thing about react navigation that we can nest navigators inside navigators 


 how drawer work if we want this top of all navigation


 We grab this stack navigator and put it inside the drawer , we grab the bottom tab and put it inside the stack 