import { Grid, Link, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../../models/post";
import { network } from "../../utils/network";
import Header from "../theme/Header";
import PostCard from "../theme/PostCard";
import empty from './../../empty.png';

export function Posts() {
    const [posts, setPosts] = useState<Post[]>([])

    async function fetchPosts(id: string) {
        const results = await network.fetchPosts(id);
        setPosts(results)
    }

    const initailized = useRef(false);
    const params = useParams<{ id: string }>();
    const navigate = useNavigate()

    useEffect(() => {
        if (!initailized.current) {
            initailized.current = true;
            if (params.id) {
                fetchPosts(params.id);
            }
        }
    }, [params.id]);

    return (
        <>
            <Header title="Blog" mainActionTitle="Go Back" mainActionCallback={() => navigate("/")} />
            {!posts.length &&
                <>
                    <Grid container direction="column" alignItems="center">
                        <img src={empty} alt="logo" />
                        <Typography component="h2" variant="h5">
                            There are no posts here!
                        </Typography>
                        <Link href="/">
                            <Typography variant="subtitle1" color="text.secondary">
                                Check another user
                            </Typography>
                        </Link>
                    </Grid>
                </>}
            {posts.map(post =>
                <PostCard post={post} key={post.id} />
            )}
        </>
    );
}