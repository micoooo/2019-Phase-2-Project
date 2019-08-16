import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UpdateDialog from './TODODialog';
import '../App.css';
import { Dialog, DialogContent, DialogTitle, ListItem, List, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, LinkedinShareButton, LinkedinIcon} from 'react-share';

interface IProps {
    id: number, 
    title: string,
    description: string,
    refresh: any
}

interface IState {
    open: boolean,
    shareOpen: boolean
}

class MediaCard extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            open: false,
            shareOpen: false,
        }
    }
    
    public toggleOpen = () => {
        this.setState((prevState: any) => {
            return {open: !prevState.open}}
            )
    }
        
    public deleteItems = () => {
        fetch("https://localhost:5001/api/Todo/" + this.props.id, {
            method: 'DELETE'
        }).then((response: any) => this.props.refresh());
    }

    public handleShareOpen = () => {
        this.setState({
            shareOpen: true,
        })
    }

    public handleShareClose = () => {
        this.setState({
            shareOpen: false,
        })
    }
        
    public render() {
        const shareUrl = 'https://facebook.com';
        return (
            <React.Fragment>
                <Card style={{ width: '80%', margin: '0 auto', marginBottom: '20px' }}>
                <CardContent>
                    <Typography gutterBottom={true} variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" style={{ outline: "none" }} onClick = {this.toggleOpen}>Edit</Button>
                        <Button size="small" color="primary" style={{ outline: "none" }} onClick={this.handleShareOpen}> Share</Button>
                    <Button size="small" color="primary" style={{ outline: "none" }} onClick = {this.deleteItems}>Remove</Button>
                </CardActions>
            </Card>
                <UpdateDialog id={this.props.id} refresh={this.props.refresh} title={this.props.title} description={this.props.description}  open = {this.state.open} toggleOpen = {this.toggleOpen} />
            
            <Dialog onClose={this.handleShareClose} open={this.state.shareOpen}>
                <DialogTitle>Share</DialogTitle>
                        <FacebookShareButton url= {'test'}/>
                <List>
                    <ListItem button={true}>
                        <ListItemAvatar>
                            <Avatar>
                                <FacebookShareButton
                                    url={shareUrl}
                                    quote='Facebook'>
                                    <FacebookIcon />
                                </FacebookShareButton>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Facebook" />
                    </ListItem>
                    <ListItem button={true}>
                        <ListItemAvatar>
                            <Avatar>
                                <TwitterShareButton
                                        url={'https://twitter.com'}>
                                    <TwitterIcon/>
                                </TwitterShareButton>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Twitter" />
                    </ListItem>
                        <ListItem button={true}>
                            <ListItemAvatar>
                                <Avatar>
                                    <LinkedinShareButton
                                        url={'https://linkedin.com'}>
                                        <LinkedinIcon />
                                    </LinkedinShareButton>
                                </Avatar>
                            </ListItemAvatar>
                        <ListItemText primary="Twitter" />
                    </ListItem>
                </List>
            </Dialog>
            </React.Fragment>
        );
    }
}

export default MediaCard;