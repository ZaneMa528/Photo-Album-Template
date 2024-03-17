import React from "react";
import {ThemeProvider, Typography, AppBar, Button, Card,  CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, createTheme} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import  classes  from './style';



const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    // backgroundColor: 'red',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    marginTop: '40px',
                },
            },
        },
    }
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {

    return (
    <>
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCameraIcon sx= {{marginRight: '20px'}}/>
                    <Typography variant= "h6">
                        Photo Album
                    </Typography>
                </Toolbar>          
            </AppBar> 
            <main>
                <div> 
                    <Container 
                        maxWidth="sm" 
                        sx={classes.container}
                    >
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone, this is a photo album and I'm trying to make this sentence as long as possible so we can see how it looks on the screen
                        </Typography>
                        <div >
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container sx={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4} >
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card sx={classes.card} >
                                    <CardMedia 
                                        sx={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent sx={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                    < CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </ CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer style={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
        </ThemeProvider>
        </>
  )
}
export default App;

