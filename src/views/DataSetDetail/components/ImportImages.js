import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  content:{
    padding:theme.spacing(3)
  }
}));

export default function ImportImages() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.content}>
        <Typography variant="h4">Selecciona las imágenes a importar</Typography>
        Para crear un modelo personalizado, importa un conjunto de imágenes para prepararlo.
        Cada imagen se debe categorizar con una etiqueta. Las etiquetas son esenciales para que
        el modelo sepa identificar imágenes.
        <Box>
          <FormControl>
            <RadioGroup name="qty-images">
              <FormControlLabel
                control={<Radio/>}
                label="Subir imágenes desde tu equipo."
                value="images"
              />
              <FormControlLabel
                control={<Radio/>}
                label="Seleccionar archivo CSV."
                value="csv"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </div>
  )
}
