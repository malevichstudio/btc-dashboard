import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        position: "relative"
    },
    title: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(255, 255, 255, 0.8)",
        zIndex: "1",
        borderRadius: "4px"
    }
}));

const ContentEmpty = ({ contentLength, children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {!contentLength && (
                <div className={classes.title}>
                    <Typography variant="h5">No data</Typography>
                </div>
            )}
            {children}
        </div>
    );
};

export default ContentEmpty;
