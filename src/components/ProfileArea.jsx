import { useDispatch } from "react-redux"
import Profile from "./Profile"
import { useEffect } from "react"
import { getProfile } from "../action"



const ProfileArea = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile('me'))
    }, [])
    
    return(
        <Profile />
    )
}


export default ProfileArea