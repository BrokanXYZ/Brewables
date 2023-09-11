import NavBar from './NavBar';
import { Container } from '@mui/material';
import { ReactNode } from 'react';

type BasicPageProps = {
  children: ReactNode
}

export default function BasicPage(props: BasicPageProps) {
  return (<>
    <NavBar/>
    <Container sx={{ marginTop: '40px', marginBottom: '40px'}}>
      {props.children}
    </Container>
  </>)
}