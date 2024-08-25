
type ProfileDataProps = {
    data: any
}

export default function ProfileData({data}: ProfileDataProps) {
    return <>
        {/* Avatar, Post list, edit profile, etc.. */}
        {/* <Avatar profilePhoto={data.profilePhoto} */}
        {/* <PostList posts={data.posts} */}
        <div>{data.name}</div>
    </>
}