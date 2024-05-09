import { Button, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { User } from '../../models/users';

interface UserCardProps {
  user: User;
  actionTitle?: string;
  actionCallback?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function UserCard(props: UserCardProps) {
  const { user, actionTitle, actionCallback } = props;

  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {user.name}
          </Typography>
          <Typography component="h3" variant="h6">
            {user.email}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {user.status}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {user.gender}
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <CardActionArea component="a" href={"/post/" + user.id}>
                <Typography variant="subtitle1" color="primary">
                  View all posts...
                </Typography>
              </CardActionArea>
            </Grid>
            <Grid item xs={6}>
              {
                actionTitle && actionCallback &&
                <Button variant="outlined"  color="error" size="small" onClick={actionCallback}>
                  {actionTitle}
                </Button>
              }
            </Grid>
          </Grid>
        </CardContent>
        {/* <CardMedia
          component="img"
          sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
          image={getGravatarURL(user.email)}
          alt={user.name}
        /> */}
      </Card>
    </Grid>
  );
}