import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersAction, loginAction } from "../../store/actionCreator"
import Select from 'react-select';
import { Link } from "react-router-dom";



const SelectUser = () => {
    const dispatch = useDispatch()

    // Internal state for active users
    const [selectedUser, setSelectedUser] = useState()

    // Fetch the user data to state
    useEffect(()=>{
        setTimeout(dispatch(fetchUsersAction()), 3000)

    })

    // Get User data form redux
    const usersData = useSelector((state => state.users))

    // Format the userData to be added in the select
    const options = Object.keys(usersData).map(user =>({
                        value:usersData[user].id, label: <div><img src={usersData[user].avatarURL} height="30px" width="30px"/> {usersData[user].name} </div>
                    }))

    // Handle selecting user from select
    const handleSelect = (id) => {
        setSelectedUser(usersData[id])
    }

    // Handle button Click
    const handleLoginButton = () =>{
        dispatch(loginAction(selectedUser))
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

            <Link to='/' onClick={handleLoginButton} >
                login
            </Link>

        </div>
    )
}

export default SelectUser