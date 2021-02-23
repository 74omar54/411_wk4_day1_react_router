import React from 'react';
import cars from '../cars.json';
import { Container, Paper, Chip } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    const id = props.match.params.id -1;
    const car = cars[id]
     
    
    return (
        <div>
        <Grid container>
            <Container>
                <Paper>
                    <h1>{car.Name}</h1>
                    <Grid item>
                        <Chip label={`ID: ${id}`}/>
                        <Chip label={`MPG: ${car.Miles_per_Gallon}`}/>
                        <Chip label={`Cylinders: ${car.Cylinders}`}/>
                        <Chip label={`Displacement: ${car.Displacement}`}/>
                        <Chip label={`Horspower: ${car.Horsepower}`}/>
                        <Chip label={`Weight: ${car.Weight_in_lbs}`}/>
                        <Chip label={`Acceleration: ${car.Acceleration}`}/>
                        <Chip label={`Year Model: ${car.Year}`}/>
                        <Chip label={`Originated: ${car.Origin}`}/>
                    </Grid>
                    

                </Paper>
            </Container>
        </Grid>
        </div>
    )
}

export default Car