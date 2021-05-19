import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import { Card } from "@material-ui/core";

const API_KEY = "AIzaSyAMwS6HCxXBI7FwUjmzVhx_8cMfxSVNdgc";
// clientID : 202200914928-8fkfnvnus14p6r9gb02gv4m5cans0120.apps.googleusercontent.com
let calendars = [
    { calendarId: "nsithijashehara@gmail.com" },
    {
        calendarId: "nsithijashehara@gmail.com",
        color: "#B241D1" //optional, specify color of calendar 2 events
    }
];
let styles = {
    //you can use object styles (no import required)
    calendar: {
        borderWidth: "10px", //make outer edge of calendar thicker
    },

    //you can also use emotion's string styles
    today: css`
    color: blue;
    border: 1px solid blue;
  `
}
function Calanader() {
    return (
        <Card className="CardView">
            <Calendar apiKey={API_KEY} calendars={calendars} styles={styles}/>
        </Card>
    )
}

export default Calanader
