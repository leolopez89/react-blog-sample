import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent, Switch, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import { User } from "../../models/users";

interface CreateUserDialogProps {
    isOpen: boolean;

    handleCreate: Function;
    handleCancel: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CreateUserDialog(props: CreateUserDialogProps) {
    const { isOpen, handleCreate, handleCancel } = props;

    const defaultUser: User = {
        id: 0,
        name: '',
        email: '',
        gender: 'male',
        status: 'active'
    };

    const [user, setUser] = React.useState(defaultUser);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, name: event.target.value })
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, email: event.target.value })
    };

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, status: event.target.checked ? "active" : "inactive" })
    };

    const handleGenderChange = (event: SelectChangeEvent<string>) => {
        setUser({ ...user, gender: event.target.value });
    }

    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                onClose={handleCancel}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        console.log(user, JSON.stringify(user));
                        handleCreate(user);
                    },
                }}
            >
                <DialogTitle>Create an user</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill all field
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="name"
                        label="User name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleNameChange}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={handleEmailChange}
                    />
                    <FormControl sx={{ mt: 5, minWidth: 120, mr: 5 }}>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select
                            autoFocus
                            value={user.gender}
                            onChange={handleGenderChange}
                            label="gender"
                            inputProps={{
                                name: 'gender',
                                id: 'gender',
                            }}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        sx={{ mt: 6 }}
                        control={
                            <Switch checked={user.status === "active"} onChange={handleStatusChange} />
                        }
                        label={"Status (" + user.status + ")"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button type="submit">Create</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}