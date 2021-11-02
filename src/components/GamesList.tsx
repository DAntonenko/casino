import React, { useState, useReducer } from 'react';
import { ReactSortable } from 'react-sortablejs';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import { connect } from 'react-redux';
import { setGameVisible, setGameInvisible } from '../store/actions/games';

// interface IGamesListProps {
//   games: any;
// }

interface ItemType {
  id: string;
  name: string;
  isVisible: boolean;
}

const GamesList = ({games, setGameVisible, setGameInvisible}: any) => {
  const [state, setState] = useState<ItemType[]>(games);

  // eslint-disable-next-line
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0); // this way of force updating is taken from the official React documentation (but even it doesn't work!)

  const onCheckboxChangeHandle = (id: string, isVisible: boolean) => {
    isVisible ? setGameInvisible(id) : setGameVisible(id);
    forceUpdate(); // doesn't work :(((
  }

  return (
    <ReactSortable list={state} setList={setState} tag='ul'>
      {state.map((item) => (
        <ListItem
          sx={{ maxWidth: '300px' }}
          key={item.id}
          secondaryAction={
            <Checkbox
              edge="end"
              onChange={() => onCheckboxChangeHandle(item.id, item.isVisible)}
              checked={item.isVisible}
            />
          }
        >
          {item.name}
        </ListItem>
      ))}
    </ReactSortable>
  );
};

export default connect(null, { setGameVisible, setGameInvisible })(GamesList);
