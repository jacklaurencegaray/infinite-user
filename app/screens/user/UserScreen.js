import React, { Component } from "react"
import { connect } from "react-redux"
import { initializeUser, loadMoreUsers } from "../../actions/user.action"
import { View, Text, StyleSheet, FlatList } from "react-native"
import UserCard from "./components/UserCard"
import UserLoading from "./components/UserLoading"
import NoMoreUsers from "./components/NoMoreUsers"
import UserError from "./components/UserError"

const USERS_PER_PAGE = 3

class UserScreen extends Component {
  componentDidMount() {
    this.props.initializeUser()
  }

  onEndReachedHandler = () => {
    this.props.loadMoreUsers()
  }

  isLastPage = () => this.props.lastPage === this.props.page

  hasLoadedAllUsers = () =>
    this.props.users.length > USERS_PER_PAGE * this.props.lastPage - 1

  render() {
    const { loading, error, users } = this.props
    const hasLoadedEveryone = this.isLastPage() && this.hasLoadedAllUsers()

    return (
      <View style={styles.userScreen}>
        <FlatList
          data={users}
          renderItem={({ item }) => <UserCard user={item} key={item.id} />}
          onEndReached={this.onEndReachedHandler}
          canLoadMore={this.isLastPage()}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={
            <Text style={styles.title}>{"Users".toUpperCase()}</Text>
          }
          ListFooterComponent={
            <>
              <UserError shown={error} />
              <UserLoading shown={loading && !error} />
              <NoMoreUsers shown={hasLoadedEveryone && !loading && !error} />
            </>
          }
          style={styles.userList}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  userScreen: {
    backgroundColor: "#f5f6fa",
    alignSelf: "stretch",
    height: "100%",
    width: "100%"
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    letterSpacing: 3,
    width: "100%",
    textAlign: "center",
    color: "#2C2D2F",
    paddingTop: 12,
    fontFamily: "larsseit-medium"
  },
  userList: {}
})

const mapStateToProps = state => ({
  users: state.user.users,
  page: state.user.page,
  loading: state.user.loading,
  lastPage: state.user.totalPages,
  error: state.user.error
})

const mapDispatchToProps = dispatch => ({
  initializeUser: () => dispatch(initializeUser()),
  loadMoreUsers: () => dispatch(loadMoreUsers())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserScreen)
