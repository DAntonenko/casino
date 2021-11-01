import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';

interface IGamesListProps {
  games: any;
}

interface ItemType {
  id: number;
  name: string;
}

const GamesList = ({games}: any) => {
  const [state, setState] = useState<ItemType[]>(games);

  return (
    <ReactSortable list={state} setList={setState} tag='ul'>
      {state.map((item) => (
        <ListItem key={item.id}>
          {item.name}
          <Checkbox
            edge="end"
            // onChange={handleToggle(value)}
            // checked={checked.indexOf(value) !== -1}
            // inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItem>
      ))}
    </ReactSortable>
  );
};

export default GamesList;