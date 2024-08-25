import { useEffect, useState } from "react"

export function useFetchProfile(profileId: number) {
    const [profileData, setProfileData] = useState();

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(`/api/profiles/${profileId}`)
            const data = await response.json()
            setProfileData(data)
        }

        fetchProfile();
    }, [profileId])

    return profileData
}