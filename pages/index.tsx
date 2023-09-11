import BasicPage from "@/components/BasicPage";
import BrewProcessCard from "@/components/BrewProcessCard";
import { getBrewProcessData } from "@/utilities/getCsvData";
import { Grid } from "@mui/material";

export default function Home() {
  const { brewProcesses, error } = getBrewProcessData();
  return (
    <BasicPage>
      <Grid container spacing={3}>
        {brewProcesses.map((brewProcess) => 
          <Grid item xs={3}>
            <BrewProcessCard brewProcess={brewProcess}/>
          </Grid>
        )}
      </Grid>
    </BasicPage>
  )
}