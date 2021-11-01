import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import GamesGrid from './components/GamesGrid/GamesGrid';
import GamesList from './components/GamesList';
import { connect } from 'react-redux';
import { getGames } from './store/actions/games';

import './common_styles/App.css';

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`main-tabpanel-${index}`}
      aria-labelledby={`main-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `main-tab-${index}`,
    'aria-controls': `main-tabpanel-${index}`,
  };
}

export const App = ({getGames, games}: any) => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    getGames();
  });

  return (
    <CssBaseline>
      <AppBar position='fixed' sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='main applicaton tabs'
            centered
          >
            <Tab label="Grid" {...a11yProps(0)} />
            <Tab label="List" {...a11yProps(2)} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{ paddingTop: '80px' }} component='main'>
        <TabPanel value={value} index={0}>
          <GamesGrid
            games={games}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GamesList
            games={games}
          />
        </TabPanel>
      </Box>
    </CssBaseline>
  );
}

const mapStateToProps = function (state: any) {
  return {
    games: state.games.games,
  }
}

export default connect(mapStateToProps, { getGames })(App);
