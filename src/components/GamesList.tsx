import React, { FC, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { games } from '../games.json';

interface ItemType {
  id: number;
  name: string;
}

const GamesList: FC = (props) => {
  const [state, setState] = useState<ItemType[]>(games);

  return (
    <ReactSortable list={state} setList={setState} tag='ul'>
      {state.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ReactSortable>
  );
};

export default GamesList;