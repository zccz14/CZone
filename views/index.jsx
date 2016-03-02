var React = require('react');
var ReactDOM = require('react-dom');
require('react-tap-event-plugin')();

var Home = require('./home.jsx');

var Index = React.createClass({
    render : function(){
        return (
            <Home />
        );
    }
});

var app = document.createElement('div');
ReactDOM.render(<Index />, document.body.appendChild(app));
document.body.style="margin:0;";