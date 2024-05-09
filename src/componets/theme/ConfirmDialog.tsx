import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

interface ConfirmDialogProps {
    title: string;
    description?: string;

    isOpen: boolean;

    handleOk: React.MouseEventHandler<HTMLButtonElement>;
    handleCancel: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ConfirmDialog(props: ConfirmDialogProps) {
    const { title, description, isOpen, handleOk, handleCancel } = props;

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
                    <Button onClick={handleCancel} autoFocus>Cancel</Button>
                    <Button onClick={handleOk} color="error">Agree</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}