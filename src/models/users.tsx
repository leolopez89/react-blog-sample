export interface User {
    id: number
    name: string
    email: string
    gender: string
    status: string
}

export interface UserResponse {
    pages: number;
    users: User[];
}