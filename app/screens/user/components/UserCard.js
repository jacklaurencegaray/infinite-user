import React, { Component } from "react"
import { Col, Row } from "react-native-easy-grid"
import { Image, Text, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default class UserCard extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render() {
    const { avatar, first_name, last_name } = this.props.user
    return (
      <Row style={styles.container}>
        <Col style={styles.avatarContainer} size={2}>
          <Image style={styles.avatar} source={{ uri: avatar }} />
        </Col>
        <Col size={5} style={styles.nameContainer}>
          <Text style={styles.username}>{`${first_name} ${last_name}`}</Text>
          <Text style={styles.description}>
            I am {`${first_name} ${last_name}`} and I'm cool!
          </Text>
        </Col>
      </Row>
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
    marginTop: 5,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "#FFFFFF"
  },
  avatarContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 5,
    marginLeft: 8
  },
  avatar: {
    flex: 1,
    height: 80,
    width: 80,
    borderRadius: 999
  },
  nameContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15
  },
  username: {
    fontSize: 17,
    fontFamily: "larsseit-bold",
    lineHeight: 25
  },
  description: {
    fontFamily: "larsseit",
    fontSize: 16,
    lineHeight: 25
  }
})
