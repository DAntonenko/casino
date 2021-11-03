import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import GameCard from '../../components/GameCard';

import './GamesGrid.css';

interface ItemType {
  id: string;
  name: string;
  isVisible: boolean;
}

const GamesGrid = ({games}: any) => {
  const [state, setState] = useState<ItemType[]>(games);

  return (
    <Box
      display='grid'
      gap={2}
      sx={{ paddingBottom: '16px' }}
      className='grid-container'
    >
      <ReactSortable list={state} setList={setState} tag='div' style={{display: 'contents'}}>
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
      </ReactSortable>
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
