import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { connect } from 'react-redux';
import { setGameInvisible } from '../store/actions/games';
import image from '../assets/table.jpg';

interface IGameCardProps {
  id: string;
  name: string;
  info?: string;
  setGameInvisible: any;
}

const GameCard: React.FunctionComponent<IGameCardProps> = ({id, name, info, setGameInvisible}) => {

  return (
    <Card sx={{ minWidth: 280, maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={image}
          alt={name}
        />
        <CardContent sx={{ height: 200, overflow: 'auto' }} >
          <Typography gutterBottom variant='h5' component='h5'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size='small'
          color='primary'
          onClick={() => {
            setGameInvisible(id);
          }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = function (state: any) {
  console.log('card')
  return {
    games: state.games.games,
  }
};

export default connect(mapStateToProps, { setGameInvisible })(GameCard);
