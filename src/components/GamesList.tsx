import React, { FC } from 'react';
import { ReactSortable } from 'react-sortablejs';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import { connect } from 'react-redux';
import { setGameVisible, setGameInvisible, setGamesList } from '../store/actions/games';
import {IGame} from "../models/game/i-game";

interface IGamesListProps {
  games: IGame[];
  setGamesList(newGames: IGame[]): void;
  setGameVisible: (id: string) => void;
  setGameInvisible: (id: string) => void;
}

const GamesList: FC<IGamesListProps> = ({
  games,
  setGamesList,
  setGameVisible,
  setGameInvisible,
}) => {

  const onCheckboxChangeHandle = (id: string, isVisible: boolean) => {
    isVisible ? setGameInvisible(id) : setGameVisible(id);
  }

  return (
    <ReactSortable list={games} setList={setGamesList} tag='ul'>
      {games.map((game: IGame) => (
        <ListItem
          sx={{ maxWidth: '300px' }}
          key={game.id}
          secondaryAction={
            <Checkbox
              edge="end"
              onChange={() => onCheckboxChangeHandle(game.id, game.isVisible)}
              checked={game.isVisible}
            />
          }
        >
          {game.name}
        </ListItem>
      ))}
    </ReactSortable>
  );
};

export default connect(null, { setGameVisible, setGameInvisible, setGamesList })(GamesList);
