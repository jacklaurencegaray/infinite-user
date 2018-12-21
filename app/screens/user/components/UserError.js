import React from "react"
import { View, Text, StyleSheet } from "react-native"
import LottieView from "lottie-react-native"

export default ({ shown }) =>
  shown ? (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={require("../../../../assets/lottie/sadface.json")}
        autoPlay
        loop={false}
      />
      <Text style={styles.text}>
        A problem occured while trying to find all users. Try again later.
      </Text>
    </View>
  ) : (
    <View />
  )

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  animation: {
    height: 200
  },
  text: {
    fontFamily: "larsseit",
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 25,
    marginRight: 25,
    lineHeight: 25,
    textAlign: "center"
  }
})
