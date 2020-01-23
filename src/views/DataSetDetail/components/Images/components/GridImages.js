import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from '../../tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '70vh',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function GridImages() {
  const classes = useStyles();

  return (
    <div>
      <GridList
        cellHeight={180}
        className={classes.gridList} 
        cols={4}
      >
        <GridListTile
          cols={4}
          key="Subheader"
          style={{ height: 'auto' }}
        >
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={`/images/ife/${tile.img}.jpg`} />
            <GridListTileBar
              actionIcon={
                <IconButton 
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
              subtitle={<span>by: {tile.author} title={tile.title}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
