var React = require('react');

var marked = require('marked');

module.exports = React.createClass({
    displayName : 'MarkdownBox',
    render : function(){
        return (
            <div dangerouslySetInnerHTML={{__html : marked(this.props.children)}}></div>
        )
    }
});