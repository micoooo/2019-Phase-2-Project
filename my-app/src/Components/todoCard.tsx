import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function MediaCard(props: any) {
    return (
        <Card >
            <CardActionArea>
                <CardMedia
                    image="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjJ36Xk5YPkAhUDjuYKHQEbChYQjRx6BAgBEAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGiant_panda&psig=AOvVaw1rMDWkYO42X4OZTfh8Rrdm&ust=1565921358304619"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom={true} variant="h5" component="h2">
                        Lizard
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}