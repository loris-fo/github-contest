var USER_DATA = {
  image: "https://avatars1.githubusercontent.com/u/10195963?v=3&s=460",
  username: "loris-fo",
  nameUser: "loris"
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfileContainer = React.createClass({
  render: function() {
    return (
      <div>
        <ProfileImg userImg={this.props.user.image} />
        <ProfileLink username={this.props.user.username} />
        <ProfileName nameUser={this.props.user.nameUser} />
      </div>
    )
  }
});

var ProfileImg = React.createClass({
  render: function() {
    return <img src={this.props.userImg} style={{width:100, height:100}} />
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={"https://www.github.com/" + this.props.username}>{this.props.username}</a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>
        <p>{this.props.nameUser}</p>
      </div>
    )
  }
});

ReactDOM.render(
  <ProfileContainer user={USER_DATA} />,
  document.getElementById('app')
)
