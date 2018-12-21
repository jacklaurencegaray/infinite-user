import React from "react"
import { View, Text, StyleSheet, Linking } from "react-native"
import LottieView from "lottie-react-native"

export default ({ shown }) =>
  shown ? (
    <View style={styles.endOfList}>
      <LottieView
        style={styles.animation}
        source={require("../../../../assets/lottie/check.json")}
        autoPlay
        loop={false}
      />
      <Text style={styles.endOfListText}>There are no more users.</Text>
      <Text
        style={styles.credits}
        onPress={() => Linking.openURL("https://jacklaurence.net")}
      >
        {"jacklaurence.net"}
      </Text>
    </View>
  ) : (
    <View />
  )

const styles = StyleSheet.create({
  animation: {
    height: 60,
    marginTop: 10,
    alignSelf: "center"
  },
  endOfList: {
    paddingTop: 18,
    paddingBottom: 35,
    textAlign: "center",
    width: "100%",
    flex: 1
  },
  endOfListText: {
    marginTop: 12,
    marginBottom: 20,
    fontSize: 17,
    fontFamily: "larsseit",
    textAlign: "center"
  },
  credits: {
    fontFamily: "larsseit",
    fontSize: 16,
    letterSpacing: 0.3,
    width: "100%",
    textAlign: "right",
    paddingRight: 15,
    marginTop: 25
  }
})
