import React from "react";
import logo from '../images/tippl_300_x_300.png';


function Greet() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "evening"
    }

    //const width = '80%';
    const styles = {
        color: "#FFF",
        // backgroundColor: "#E96969",
        textAlign: "center",
        width: 450,
        padding: 20,
        fontsize: 10,
        borderRadius: 20,
        fontFamily: "Montserrat",
        fontcolor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "row wrap",
        // display: [
        // '-webkit-box',
        // '-webkit-flex',
        // '-ms-flexbox',
        // 'flex'
        // ],


    }

    return (
        <div className="row ToDoRow top-buffer d-flex justify-content-center">
            <a className="funkybutton">



                <h5 style={styles} >Good {timeOfDay}!</h5></a>
        </div>

    )
}


export default Greet