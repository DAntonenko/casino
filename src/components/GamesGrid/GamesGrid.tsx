import React, {FC} from 'react';
import { ReactSortable } from 'react-sortablejs';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import GameCard from '../../components/GameCard';
import { setGamesList } from '../../store/actions/games';
import {IGame} from '../../models/game/i-game';

import './GamesGrid.css';

interface IGamesGridProps {
  games: IGame[];
  setGamesList(newGames: IGame[]): void;
}

const GamesGrid: FC<IGamesGridProps> = ({
  games,
  setGamesList,
}) => {

  return (
    <Box
      display='grid'
      gap={2}
      sx={{ paddingBottom: '16px' }}
      className='grid-container'
    >
      {/* <ReactSortable list={games} setList={setGamesList} tag='div' style={{display: 'contents'}}> */}
        {games.map((game: IGame) => (
          game.isVisible &&
            <Box key={game.id}>
              <GameCard
                id={game.id}
                name={game.name}
                info={game.info}
              />
            </Box>
        ))}
      {/* </ReactSortable> */}
    </Box>
  );
}

export default connect(null, {setGamesList})(GamesGrid);
