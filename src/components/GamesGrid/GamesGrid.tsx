import React from 'react';
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
        <Box key={game.id}>
          <GameCard
            name={game.name}
            info={game.info}
          />
        </Box>
      ))}
    </Box>
  );
}

export default GamesGrid;
