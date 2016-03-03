var $ = require('jquery');
var React = require('react');

var AppBar = require('material-ui/lib/app-bar');
var Paper = require('material-ui/lib/paper');
var Tabs = require('material-ui/lib/tabs/tabs');
var Tab = require('material-ui/lib/tabs/tab');
var Card = require('material-ui/lib/card/card');
var CardMedia = require('material-ui/lib/card/card-media');
var CardTitle = require('material-ui/lib/card/card-title');
var CardText = require('material-ui/lib/card/card-text');

var GridList = require('material-ui/lib/grid-list/grid-list');
var GridTile = require('material-ui/lib/grid-list/grid-tile');
var IconButton = require('material-ui/lib/icon-button');
var FontIcon = require('material-ui/lib/font-icon');
var MarkdownBox = require('./markdown-box.jsx');

module.exports = React.createClass({
    displayName : "Home",
    getInitialState : function(){
        return {
            self : '',
        }
    },
    componentDidMount : function(){
        $.get('self.md',function(data){
            this.setState({
                self : data,
            });
        }.bind(this));
    },
    render : function(){
        return (
            <div>
                <AppBar 
                    title="出雲理樹"
                    iconElementRight={
                        <IconButton>
                            <a href="https://github.com/zccz14/CZone">
                                <FontIcon className="muidocs-icon-custom-github" color="white"></FontIcon>
                            </a>
                        </IconButton>
                    }
                />
                <Tabs>
                    <Tab label="献给本命">
                        <CardMedia
                            style={{
                                maxHeight : window.innerHeight * 0.618,
                                overflowY : 'hidden',
                            }}
                            overlay={<CardTitle subtitle="GOSICK" title="温暖我的…你的光芒"></CardTitle>}
                        >
                            <img src="http://img4.duitang.com/uploads/item/201407/23/20140723181040_F8vac.jpeg" alt=""/>
                        </CardMedia>
                    </Tab>
                    <Tab label="关于我">
                        <GridList cols={12}>
                            <GridTile cols={4} rows={2}>
                                <div style={{
                                    display: 'flex',
                                    height : '100%',
                                    justifyContent : 'center',
                                    alignItems : 'center',
                                }}>
                                    <Paper circle={true} style={{overflow : 'hidden'}} zDepth={3}>
                                    <img src="http://media.steampowered.com/steamcommunity/public/images/avatars/82/82c43d9a38cbfb5722d6459f3a60448d7cf3444d_full.jpg" alt=""/>
                                    </Paper>
                                </div>
                            </GridTile>
                            <GridTile cols={8} rows={2}>
                                <MarkdownBox>
                                    {
                                        this.state.self
                                    }
                                </MarkdownBox>
                            </GridTile>
                        </GridList>
                        <div style={{width : '40%'}}>
                        </div>
                    </Tab>
                </Tabs>
                
            </div>
        )
    }
});