import { useEffect } from "react";
import PageLayout from "../components/PageLayout";
import { useFetchProfile } from "../hooks/useFetchProfile";
import ProfileData from "../components/ProfileData";

type ProfilePageProps = {
    profileId: number;
}

export default function ProfilePage({ profileId }: ProfilePageProps) {
    
    const profileData = useFetchProfile(profileId);

    return <PageLayout>
        <h1>Profile Page</h1>
        <ProfileData data={profileData} />
    </PageLayout>;
}

// Works but a page component its only responsibility to
// take all the different pieces of code and things and put together
// NOT responsable for implementing the details of those specific things like this fetching

// useEffect(() => {
//     const fetchProfile = async () => {
//         const response = await fetch(`/api/profiles/${profileId}`)
//         const data = await response.json()
//         setProfileData(data)
//     }

//     fetchProfile();
// }, [profileId])