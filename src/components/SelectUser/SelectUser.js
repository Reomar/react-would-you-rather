import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersAction } from "../../store/actionCreator"

const SelectUser = () => {
    const dispatch = useDispatch()


    // Fetch the user data to state
    useEffect(()=>{
        dispatch(fetchUsersAction())
    },[])

    // get User data form redux
    const usersData = useSelector((state => state.users))

    return <div>Select user</div>
}

export default SelectUser