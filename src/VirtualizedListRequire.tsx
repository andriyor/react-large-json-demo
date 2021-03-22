import React from 'react';
import { Virtuoso } from 'react-virtuoso';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { ItemContent } from 'react-virtuoso/dist/interfaces';

import { ItemType } from './types/ItemType';

const jsonData: ItemType[] = require('./data.json');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 400,
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const renderVirtuoso: ItemContent<Record<number, ItemType>> = (index, data) => {
  return (
    <Card key={index} style={{ marginBottom: '15px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {jsonData[index].name}
        </Typography>
        <Typography variant="body2" component="p">
          {index} {jsonData[index].email}
        </Typography>
        <Typography variant="body2" component="p">
          {jsonData[index].about}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function VirtualizedListRequire() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Virtuoso style={{ height: '950px' }} totalCount={jsonData.length} itemContent={renderVirtuoso} />
    </div>
  );
}
