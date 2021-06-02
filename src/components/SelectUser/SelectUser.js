import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersAction } from "../../store/actionCreator"
import Select from 'react-select';



const SelectUser = () => {
    const dispatch = useDispatch()

    // Internal state for active users
    const [selectedUser, setSelectedUser] = useState()

    // Fetch the user data to state
    useEffect(()=>{
        setTimeout(dispatch(fetchUsersAction()), 3000)
    },[])

    // Get User data form redux
    const usersData = useSelector((state => state.users))

    // Format the userData to be added in the select
    const options = Object.keys(usersData).map(user =>({
                        value:usersData[user].id, label:usersData[user].name
                    }))

    // Handle selecting user from select
    const handleSelect = (id) => {
        setSelectedUser(usersData[id])
    }

    // Handle button Click
    const handleLoginButton = () =>{
        // TODO dispatch
        console.log(selectedUser)
    }

    return (
        <div>
            <p>Login to continue</p>
            {/* TODO Add icon beside the name */}
            <Select
                options={options}
                onChange={(evt) => handleSelect(evt.value)}
                placeholder={"Select User..."}
            />

            <button onClick={handleLoginButton} >
                login
            </button>
        </div>
    )
}

export default SelectUser