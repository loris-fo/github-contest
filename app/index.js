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
        <img src={this.props.user.image} style={{width:100, height:100}} />
        <a href={"https://www.github.com/" + this.props.user.username}>{this.props.user.username}</a>
        <p>{this.props.user.nameUser}</p>
      </div>
    )
  }
});

ReactDOM.render(
  <ProfileContainer user={USER_DATA} />,
  document.getElementById('app')
)
