import React, { Component } from "react"
import SvgAnimatedLinearGradient from "react-native-svg-animated-linear-gradient"
import { Svg } from "expo"
import { View, StyleSheet } from "react-native"
import UserCard from "./UserCard"

export default class UserLoading extends Component {
  render() {
    return this.props.shown ? (
      <View style={styles.container}>
        <SvgAnimatedLinearGradient
          height={100}
          primaryColor={"#DEE6ED"}
          secondaryColor={"#C5CDD5"}
        >
          <Svg.Circle cx="50" cy="50" r="40" />
          <Svg.Rect x="120" y="13" rx="5" ry="5" width="50%" height="15" />
          <Svg.Rect x="120" y="40" rx="5" ry="5" width="40%" height="12" />
          <Svg.Rect x="120" y="65" rx="5" ry="5" width="20%" height="12" />
        </SvgAnimatedLinearGradient>
      </View>
    ) : (
      <View />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    alignItems: "center",
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 7,
    marginBottom: 7,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    padding: 15
  }
})
