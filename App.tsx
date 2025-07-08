import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigation from './src/navigation/RootNavigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
const App = () => {
  return (
  <View style={{flex:1}}>
    <GestureHandlerRootView>
      <RootNavigation/>
    </GestureHandlerRootView>
  </View>
  )
}

export default App

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { RootNavigation } from '@navigation'
// import { WelcomeScreen } from '@modules'

// const App = () => {
//   return (
//   <View style={{flex:1}}>
//     {/* <RootNavigation/> */}
//       <WelcomeScreen/>
//   </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})