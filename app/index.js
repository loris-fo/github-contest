var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Hello, World!</h3>
      </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
)
