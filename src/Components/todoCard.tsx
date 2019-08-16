import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface IProps {
    title: string,
    description: string,
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

    // public deleteItems = () => {
    //     fetch("https://localhost:5001/api/Todo/" + this.props.id, {
    //         method: 'DELETE'
    //     }).then((response: any) => this.props.refresh());
    // }

    public render() {
        return (
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
                    <Button size="small" color="primary" style={{ outline: "none" }}>Edit</Button>
                    <Button size="small" color="primary" style={{ outline: "none" }}>Share</Button>
                    <Button size="small" color="primary" style={{ outline: "none" }}>Remove</Button>
                </CardActions>
            </Card>
        );
    }
}

export default MediaCard;