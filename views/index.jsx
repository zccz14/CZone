var React = require('react');
var ReactDOM = require('react-dom');
require('react-tap-event-plugin')();

var Index = React.createClass({
    render : function(){
        return (
            <div>
                Welcome to CZone
            </div>
        );
    }
});

var app = document.createElement('div');
ReactDOM.render(<Index />, document.body.appendChild(app))