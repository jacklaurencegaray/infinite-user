import React, { Component } from "react"
import { StyleSheet, View, StatusBar } from "react-native"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import rootStore from "./app/reducers/root.reducer"
import UserScreen from "./app/screens/user/UserScreen"
import thunk from "redux-thunk"
import logger from "redux-logger"
import initialState from "./app/initialState"
import { Font } from "expo"
import LoadingScreen from "./app/screens/loading/LoadingScreen"

const store = createStore(
  rootStore,
  initialState,
  applyMiddleware(thunk, logger)
)

export default class App extends Component {
  state = {
    loading: true,
    canProceed: false
  }

  async componentDidMount() {
    StatusBar.setHidden(true)
    await Font.loadAsync({
      "larsseit-light": require("./assets/fonts/Larsseit-Light.ttf"),
      larsseit: require("./assets/fonts/Larsseit.ttf"),
      "larsseit-medium": require("./assets/fonts/Larsseit-Medium.ttf"),
      "larsseit-bold": require("./assets/fonts/Larsseit-Bold.ttf")
    })
    this.setState({ loading: false })
    setTimeout(() => this.setState({ canProceed: true }), 15000)
  }

  render() {
    const { loading, canProceed } = this.state
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {!loading && canProceed ? <UserScreen /> : <LoadingScreen />}
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  }
})
