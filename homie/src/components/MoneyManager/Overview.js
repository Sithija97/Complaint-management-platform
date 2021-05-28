import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./Money.css";
import "./InnerStyles.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

function Overview({income, expense, saving}) {

  const [events, setEvents] = useState([]);
 
  useEffect(() => {
    db.collection("events")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        setEvents(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, [db]);
  return (
    <>
      <div className="container">
        <h3 className='topic'>Overview</h3>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText primary={"Inflows :" + income} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary={"Outflows :" + expense} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SaveAltIcon />
            </ListItemIcon>
            <ListItemText primary={"Savings :" + saving} />
          </ListItem>
        </List>
      </div>
      <div className="form_container Table">
        <h3>Past events</h3>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Name</b>
                </TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.data.name}>
                  <TableCell component="th" scope="row">
                    {event.data.name}
                  </TableCell>
                  <TableCell align="right">{event.data.amount}</TableCell>
                  <TableCell align="right">{event.data.type}</TableCell>
                  <TableCell align="right">{event.data.category}</TableCell>
                  <TableCell align="right">{event.data.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Overview;
