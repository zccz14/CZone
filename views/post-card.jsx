var React = require('react');

var Card = require('material-ui/lib/card/card');
var CardTitle = require('material-ui/lib/card/card-title');
var CardText = require('material-ui/lib/card/card-text');
var MarkdownBox = require('./markdown-box.jsx');

module.exports = React.createClass({
    displayName : 'PostCard',
    render : function(){
        return (
            <Card>
                <CardTitle 
                    title={this.props.title} 
                    subtitle={this.props.date} 
                />
                <CardText>
                    <MarkdownBox>{this.props.content}</MarkdownBox>
                </CardText>
            </Card>
        );
    }
});