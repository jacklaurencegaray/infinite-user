import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import LottieView from "lottie-react-native"

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LottieView
          style={styles.animation}
          source={require("../../../assets/lottie/refresh.json")}
          autoPlay
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  animation: {
    height: 120,
    alignSelf: "center"
  }
})
