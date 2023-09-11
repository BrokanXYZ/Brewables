import BasicPage from "@/components/BasicPage";
import BrewProcessCard from "@/components/BrewProcessCard";
import { getBrewProcessData } from "@/utilities/getCsvData";
import { Box, Divider, Grid, Paper, Step, StepButton, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import Image from 'next/image'

export default function BrewProcessDetails() {

  const [activeStep, setActiveStep] = useState(0);
  
  const steps = ['Heat Dishware', 'Steep', 'Enjoy'];

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  const getStepMedia = (step: number): JSX.Element => {
    switch(step) {
      case 0:
        return <Image src='/coffee.jpg' width={350} height={250} alt='coffee'/>
      case 1:
        return <Image src='/tea.jpg' width={350} height={250} alt='coffee'/>
      case 2:
        return <Image src='/coffee.jpg' width={350} height={250} alt='coffee'/>
      default:
        return <></>
    }
    
  }

  return (
    <BasicPage>

      <>
        <Divider>
          <Typography variant='h3' sx={{textAlign: 'center'}} >Gong Fu Cha</Typography>
        </Divider>
        <Box sx={{
          padding: '25px',
          paddingTop: '40px',
          marginTop: '-28px',
          borderColor: 'rgba(0, 0, 0, 0.12)',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderLeftWidth: '1px',
          borderLeftStyle: 'solid',
          borderRightWidth: '1px',
          borderRightStyle: 'solid'
        }}>
          <Grid container spacing={3} textAlign='center'>
              <Grid item xs={6}>
                blah
              </Grid>
              <Grid item xs={6}>
                blah
              </Grid>
          </Grid>
          <Divider variant='middle' sx={{margin: '20px'}}/>
          <Typography variant='body1'>
          Gongfu tea or kung fu tea (Chinese: 工夫茶 or 功夫茶; both gōngfū chá), literally "making tea with skill",[1] is a traditional Chinese tea preparation method sometimes called a "tea ceremony".[2][3] It is probably based on the tea preparation approaches originating in Fujian[4] and the Chaoshan area of eastern Guangdong.[5] The practice involves using smaller brewing vessels and a higher leaf-to-water ratio than in Western-style brewing. Today, the approach is used popularly by teashops carrying tea of Chinese or Taiwanese origin, and by tea connoisseurs as a way to maximize the taste of a tea selection, especially a finer one.
          </Typography>
        </Box>
      </>

      <Box sx={{textAlign: 'center', marginTop: '35px', marginBottom: '25px'}}>
        {getStepMedia(activeStep)}
      </Box>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

    </BasicPage>
  )
}