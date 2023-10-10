import { useEffect,useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, makeStyles, Avatar } from "@mui/material";

function Bar(props) {

   const handleclicka = () => {
        console.log("a");
    }

    const handleclickb = () => {
        console.log("b");
    }

    const handleclickc = () => {
        console.log("c");
    }

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Button onClick={() => {props.setHome(true);props.setPresentation(false);props.setTraces(false);handleclicka()}} color="inherit">Home</Button>
                <Button onClick={() => {props.setHome(false);props.setPresentation(true);props.setTraces(false);handleclickb()}} color="inherit">Présentation</Button>
                <Button onClick={() => {props.setHome(false);props.setPresentation(false);props.setTraces(true);handleclickc()}} color="inherit">Traces</Button>
                <Avatar style={{ marginLeft: 'auto', marginRight: '0' }} alt="David Morais Pereira" src="https://cdn.unitycms.io/images/Dv5ZcjRHaSl9vhFJt_lVHh.jpg?op=focus&val=1200,1200,1000,1000,0,0,500,500&sum=9kLjYdUBW8U" />
            </Toolbar>
        </AppBar>
    );
}

export default Bar;