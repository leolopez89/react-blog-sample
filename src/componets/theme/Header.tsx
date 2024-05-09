import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface HeaderProps {
    title: string;

    mainActionTitle?: string;
    mainActionCallback?: React.MouseEventHandler<HTMLButtonElement>;

    actionTitle?: string;
    actionCallback?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Header(props: HeaderProps) {
    const { title, actionTitle, actionCallback, mainActionTitle, mainActionCallback } = props;

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                {mainActionTitle && mainActionCallback &&
                    <Button variant="outlined" size="small" onClick={mainActionCallback}>
                        {mainActionTitle}
                    </Button>
                }
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>
                {actionTitle && actionCallback &&
                    <Button variant="outlined" size="small" onClick={actionCallback}>
                        {actionTitle}
                    </Button>
                }
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
            </Toolbar>
        </React.Fragment>
    );
}