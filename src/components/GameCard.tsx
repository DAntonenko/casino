import React, {useCallback} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { connect } from 'react-redux';
import { setGameInvisible } from '../store/actions/games';
import { IGamesGamesStore } from '../models/store/i-games-store';
import image from '../assets/table.jpg';

interface IGameCardProps {
  id: string;
  name: string;
  info?: string;
  setGameInvisible: (id: string) => void;
}

const GameCard: React.FunctionComponent<IGameCardProps> = ({id, name, info, setGameInvisible}) => {

  const onRemove = useCallback(() => {
    setGameInvisible(id);
  }, [id, setGameInvisible]);

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
          onClick={onRemove}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = function (state: IGamesGamesStore) {
  return {
    games: state.games.games,
  }
};

export default connect(mapStateToProps, { setGameInvisible })(GameCard);
