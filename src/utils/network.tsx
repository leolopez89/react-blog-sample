import { Post } from "../models/post";
import { User, UserResponse } from "../models/users";

export const network = {
    fetchUsers, fetchPosts, deleteUser, createUser
}

async function fetchUsers(page: number = 1): Promise<UserResponse> {

    try {
        const results = await fetch("https://gorest.co.in/public/v2/users?page=" + page);
        if (results.ok) {
            const json = await results.json();
            const pages = results.headers.get("x-pagination-pages") ?? "1"
            return {
                pages: parseInt(pages),
                users: json
            };
        }
    } catch (error) {
        console.error("Error fetching users", error)
    }
    return { pages: 1, users: [] };
}

async function fetchPosts(id: string): Promise<Post[]> {
    try {
        const route = "https://gorest.co.in/public/v2/users/" + id + "/posts";
        const results = await fetch(route);
        if (results.ok) {
            const json = await results.json();
            return json
        }
    } catch (error) {
        console.error("Error fetching posts", error)
    }
    return [];
}

async function createUser(user: User): Promise<boolean> {
    try {
        const token = process.env.REACT_APP_TOKEN;
        const route = "https://gorest.co.in/public/v2/users?access-token=" + token;

        const response = await fetch(route, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            return true;
        }
    } catch (error) {
        console.error("Error creating the user", error)
    }
    return false;
}

async function deleteUser(id: string): Promise<boolean> {
    try {
        const token = process.env.REACT_APP_TOKEN;
        const route = "https://gorest.co.in/public/v2/users/" + id + "?access-token=" + token;

        const response = await fetch(route, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            return true;
        }
    } catch (error) {
        console.error("Error deleting an user", error)
    }
    return false;
}