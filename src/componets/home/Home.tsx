import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { User } from "../../models/users";
import { network } from "../../utils/network";
import ConfirmDialog from "../theme/ConfirmDialog";
import CreateUserDialog from "../theme/CreateUserDialog";
import Header from "../theme/Header";
import MessageDialog from "../theme/MessageDialog";
import UserCard from "../theme/UserCard";
import Footer from "../theme/Footer";

interface Message {
    title: string;
    open: boolean;
    description: string;
}

export function Home() {
    const [users, setUsers] = useState<User[]>([])

    const [open, setOpen] = useState(false)
    const [userToRemove, setUserToRemove] = useState(-1)

    const [openCreator, setOpenCreator] = useState(false)

    const defaultMessage: Message = {
        title: "",
        open: false,
        description: ""
    }
    const [message, setMessage] = useState(defaultMessage);

    async function fetchUsers() {
        const results = await network.fetchUsers();
        setUsers(results)
    }

    const handleClickOpen = (id: number) => {
        setUserToRemove(id)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOpenCreator(false);
    };

    async function deleteUser() {
        const removed = await network.deleteUser(String(userToRemove));
        if (removed) {
            fetchUsers();
            setMessage({ open: true, description: "Operation completed!", title: "Success!" })
        } else {
            setMessage({ open: true, description: "Operation failed!", title: "Error!" })
        }
        handleClose();
    }

    async function createUser(user: User) {
        const created = await network.createUser(user);
        if (created) {
            fetchUsers();
            setMessage({ open: true, description: "Operation completed!", title: "Success!" })
        } else {
            setMessage({ open: true, description: "Operation failed!", title: "Error!" })
        }
        handleClose();
    }

    const showCreateUser = () => setOpenCreator(true);

    const initailized = useRef(false);

    useEffect(() => {
        if (!initailized.current) {
            initailized.current = true;
            fetchUsers();
        }
    }, []);

    return (
        <>
            <Header title="Blog" actionTitle="Add User" actionCallback={showCreateUser} />
            <main>
                <Grid container spacing={4}>
                    {users.map(user =>
                        <UserCard user={user} key={user.id} actionTitle="Delete User" actionCallback={() => handleClickOpen(user.id)} />
                    )}
                </Grid>
            </main>
            <Footer description={"sadasdas"} title={"sadsadsad"} />

            <ConfirmDialog
                isOpen={open}
                title={"Are you sure to remove this user?"}
                description="This action is irreversible"
                handleOk={deleteUser}
                handleCancel={handleClose}
            />

            <CreateUserDialog
                isOpen={openCreator}
                handleCreate={createUser}
                handleCancel={handleClose} />

            <MessageDialog
                title={message.title}
                description={message.description}
                isOpen={message.open}
                handleCancel={() => setMessage({ ...message, open: false, })} />
        </>
    );
}