import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          aria-label="simple tabs example"
          onChange={handleChange}
          value={value}
        >
          <Tab
            label="Item One"
            {...a11yProps(0)}
          />
          <Tab
            label="Item Two"
            {...a11yProps(1)}
          />
          <Tab
            label="Item Three"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel
        index={0}
        value={value}
      >
        Importar
      </TabPanel>
      <TabPanel
        index={1}
        value={value}
      >
        Imágenes
      </TabPanel>
      <TabPanel
        index={2}
        value={value}
      >
        Preparar
      </TabPanel>
    </div>
  );
}
