import { ThemeProvider, alpha, AppBar, Toolbar, Typography, InputBase } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";
// import {
//     alpha,
//     AppBar,
//     Avatar,
//     Badge,
//     InputBase,
//     makeStyles,
//     Toolbar,
//     Typography,
//   } from "@material-ui/core";
//   import { useState } from "react";

// ^ please igonre those commented imports :) 

const useStyles = makeStyles((theme) => ({
    toolbar:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    logoLg:{
        display: 'none', 
        [theme.breakpoints.up('sm')]: { // if my screen breakpoint bigger then sm make it display block 
            display: 'block',
          },
    },
    logoSm:{
        // display: 'none' //temporary line, please ignore it  
        display: 'block', 
        [theme.breakpoints.up('sm')]:{
            display: 'none',
        },
    },
    search:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
    }
}))

export default function Navbar() {
    const classes = useStyles()
  return (
    <AppBar>
            <Toolbar className={classes.toolbar}>  
                <Typography variant='h6' className={classes.logoLg}>
                    Lama Dev
                </Typography>
                <Typography variant='h6' className={classes.logoSm}>
                    LAMA
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder='Search...'></InputBase>
                </div>
            </Toolbar> 
    </AppBar>
  )
}
