


// import React, {
//     createContext,
//     PropsWithChildren,
//     useContext,
//     useEffect,
//     useLayoutEffect,
//     useState
// } from 'react'

// // import api from 'api'

// const AuthContext = createContext(undefined);

// export const useAuth = () => {
//     const authContext = useContext(AuthContext)

//     if (!authContext) {
//         throw new Error('useAuth must be used within a AuthProvider')
//     }

//     return authContext
// }

// const AuthProvider = ({ children }: any) => {
//     const [token, setToken] = useState();

//     useEffect(() => {
//         const fetchMe = async () => {
//             try {
//                 const response = await api.get('/api/me')
//                 setToken(response.data.accessToken)
//             } catch {
//                 setToken(undefined)
//             }
//         }

//         fetchMe()
//     }, [])

//     useLayoutEffect(() => {
//         const authInterceptor = api.interceptors.request.use((config) => {
//             config.headers.Authorization =
//                 !config._retry && token
//                     ? `Bearer ${token}`
//                     : config.headers.Authorization;
//             return config;
//         })

//         return () => api.interceptors.request.eject(authInterceptor)
//     }, [token])

    
// }