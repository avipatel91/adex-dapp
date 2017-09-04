import React, {Component} from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button, IconButton} from 'react-toolbox/lib/button';
import {Link as ToolboxLink} from 'react-toolbox/lib/link';
import {Navigation} from 'react-toolbox/lib/navigation';
import theme from './theme.css';
import { advertiserData } from './../test-data';
import { Route, Switch, Link } from 'react-router-dom';
import {withReactRouterLink} from './../../common/rr_hoc/RRHoc.js';
import Tooltip from 'react-toolbox/lib/tooltip';

const RRButton = withReactRouterLink(Button)
const RRCardTitle = withReactRouterLink(CardTitle)
const RRCardMedia = withReactRouterLink(CardMedia)

const TooltipRRButton = withReactRouterLink(Tooltip(Button))
const TooltipIconButton = Tooltip(IconButton)



class MyCard extends Component {

    delete() {
        this.props.delete(this.props.item._id)
    }

    render () {
        let meta = this.props.item._meta
        let name = this.props.item._name
        let id = this.props.item._id
        let to = '/dashboard/' + this.props.side + '/' + this.id
        return (
            <Card style={{width: '300px'}} raised={true} theme={theme}>
                <RRCardTitle
                    to={to}
                    title={name}
                    theme={theme}
                />
                <RRCardMedia
                    to={to}
                    aspectRatio='wide'
                    image={meta.img}
                    theme={theme}
                />
                <CardTitle
                    title={id}
                />
                <CardActions theme={theme}>
                    <TooltipRRButton 
                        to={to} label='view' 
                        raised primary 
                        tooltip='Click here to click' 
                        tooltipDelay={1000} 
                        tooltipPosition='top'/>
                    <div>
                        <TooltipIconButton 
                            icon='archive' 
                            label='archive' 
                            raised  
                            tooltip='Archive here to archive' 
                            tooltipDelay={1000} 
                            tooltipPosition='top'/>
                        <TooltipIconButton 
                            icon='delete' 
                            label='delete' 
                            raised accent 
                            onMouseUp={this.delete.bind(this)}
                            tooltip='Delete here to delete' 
                            tooltipDelay={1000} 
                            tooltipPosition='top'/>
                    </div>
                </CardActions>
            </Card>
        );
    }
}

export default MyCard;