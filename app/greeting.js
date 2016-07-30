import React from "react-dom"
export default React.createClass({
render: function() {
  return (
    <div className="container">
      <h1>Hello, {this.props.name}!</h1>
    </div>
  );
},