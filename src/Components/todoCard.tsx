import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UpdateDialog from './TODODialog';

interface IProps {
    id: number, 
    title: string,
    description: string,
    refresh: any
}

interface IState {
    open: boolean,
}

class MediaCard extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            open: false
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

    public render() {
        return (
            <React.Fragment>
            <Card >
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
                    <Button size="small" color="primary" style={{ outline: "none" }}>Share</Button>
                    <Button size="small" color="primary" style={{ outline: "none" }} onClick = {this.deleteItems}>Remove</Button>
                </CardActions>
            </Card>
                <UpdateDialog id={this.props.id} refresh={this.props.refresh} title={this.props.title} description={this.props.description}  open = {this.state.open} toggleOpen = {this.toggleOpen} />
            </React.Fragment>
        );
    }
}

export default MediaCard;