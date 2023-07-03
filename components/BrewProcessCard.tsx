import { BrewProcess } from '@/utilities/brewTypes';
import { CardActionArea, CardContent, CardMedia, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

type BrewProcessCardProps = {
  brewProcess: BrewProcess
}

export default function BrewProcessCard(props: BrewProcessCardProps) {

  // get image

  return (
    <CardActionArea>
      <Card sx={{ height: "350px"}}>
          <CardMedia 
            image={props.brewProcess.category === "tea" ? "/tea.jpg" : "/coffee.jpg"}
            component="img"
            height="250"
          />
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant='h6'>
                  {props.brewProcess.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='caption'>
                  {props.brewProcess.region},&nbsp;
                  {props.brewProcess.continent}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
      </Card>
    </CardActionArea>
  )
}