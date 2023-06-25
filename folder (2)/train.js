import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TrainTable = ({ trains }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="train table">
        <TableHead>
          <TableRow>
            <TableCell>Train Number</TableCell>
            <TableCell>Train Name</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Departure Time</TableCell>
            <TableCell>Arrival Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trains.map((train) => (
            <TableRow key={train.trainNumber}>
              <TableCell component="th" scope="row">
                {train.trainNumber}
              </TableCell>
              <TableCell>{train.trainName}</TableCell>
              <TableCell>{train.origin}</TableCell>
              <TableCell>{train.destination}</TableCell>
              <TableCell>{train.departureTime}</TableCell>
              <TableCell>{train.arrivalTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TrainTable;