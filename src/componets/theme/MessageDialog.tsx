import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

interface MessageDialogProps {
    title: string;
    description?: string;

    isOpen: boolean;

    handleCancel: React.MouseEventHandler<HTMLButtonElement>;
}

export default function MessageDialog(props: MessageDialogProps) {
    const { title, description, isOpen, handleCancel } = props;

    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                onClose={handleCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>OK</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}