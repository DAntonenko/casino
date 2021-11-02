import React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import GameCard from '../../components/GameCard';

import './GamesGrid.css';

const GamesGrid = ({games}: any) => {
  return (
    <Box
      display='grid'
      gap={2}
      sx={{ paddingBottom: '16px' }}
      className='grid-container'
    >
      {games.map((game: any) => (
        game.isVisible &&
          <Box key={game.id}>
            <GameCard
              id={game.id}
              name={game.name}
              info={game.info}
            />
          </Box>
      ))}
    </Box>
  );
}

const mapStateToProps = function (state: any) {
  console.log('grid')
  return {
    games: state.games.games,
  }
};

export default connect(mapStateToProps)(GamesGrid);
