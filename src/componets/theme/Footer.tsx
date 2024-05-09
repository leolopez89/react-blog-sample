import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid, Pagination } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Leonardo's Test Page
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface FooterProps {
  title: string;
  pages: number;
  onChangePage: (page: number) => void
}

export default function Footer(props: FooterProps) {
  const { pages, title, onChangePage } = props;

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    console.log(page)
    onChangePage(page);
  }

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <Pagination count={pages} size="medium" onChange={handleChangePage} />
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}