import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { CardActionArea, CardContent, Typography, Grid, Paper, Button } from "@material-ui/core";
import Searches from "../components/Searches";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px",
  },
  card: {
    width: "140px",
    height: "200px",
    margin: "10px",
    padding: "10px",
  },
});

// The Effect Hook lets you perform side effects in function components:
export const TopRated = () => {
  const classes = useStyles();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://saras-mongo-api.herokuapp.com/songs/top-rated")
      .then((res) => res.json())
      .then((json) => {
        setSongs(json.data);
      });
  }, []);

  return (
    <>
 <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
>
      {songs.map((song) => (
          <Paper className={classes.paper} key={song.id}>
      <CardActionArea>
      <Typography 
          className={classes.heading}
          gutterBottom variant="h5" 
          component="h2">
            {song.artist}
          </Typography>
        <CardContent>
          <Typography 
          gutterBottom variant="h5" 
          component="h2">
            {song.title}
          </Typography>
          <Typography 
          variant="body2" 
          color="textSecondary" 
          component="p">
            <p>✏️Writers: {song.writers}</p>
            <p>Released: {song.released}</p>
            <p>{song.description.length > 80 ?
              `${song.description.substring(0, 80)}...` : song.description
                }</p>
          </Typography>
          <Link to={`/songs/song/${song.id}`} exact>
                <Button className={classes.button}>
                Read more
                </Button>
              </Link>
        </CardContent>
      </CardActionArea>
      </Paper>
      ))}
      </Grid>
    </>
  );
};
