import { PropsWithChildren, createContext, useContext } from "react";

// Compound Components

type PostCardContext = {
    post: Post;
}

const PostCardContext = createContext<PostCardContext | undefined>(undefined);

function usePostCardContext() {
    const context = useContext(PostCardContext)
    if (!context) {
        throw new Error('usePostCardContext must be used within a PostCard')
    }
    return context
}

type Post = {
    id: number;
    title: string;
    content: string;
    user: {
        id: number;
        name: string;
    }
}

type PostCardProps = PropsWithChildren & {
    post: Post;
}

/*
<PostCard>
    <PostCard.Title />
    <PostCard.Contents />
    <PostCard.Buttons />
</PostCard>
*/

export default function PostCard({ children, post }: PostCardProps) {
    return (
        <PostCardContext.Provider value={{ post }}>
            <div className="flex w-[300px] flex-col gap-2 rouded-md bg-neutral-800 p-2">
                <p className="text-sm text-neutral-400">By {post.user.name}</p>
                { children }
            </div>
        </PostCardContext.Provider>
    )
}

PostCard.Title = function PostCardTitle() {
    
    const { post } = usePostCardContext();

    return <h2 className="text-lg font-semibold">{post.title}</h2>
}

PostCard.Content = function PostCardContent() {
    
    const { post } = usePostCardContext();

    return <p>{post.content}</p>
}

PostCard.Buttons = function PostCardButtons() {
    return (
        <div className="flex flex-row gap-2">
            <button>Read More</button>
            <button>Comments</button>
        </div>
    )
}