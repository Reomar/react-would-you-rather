import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersAction, loginAction } from "../../store/actionCreator"
import Select from 'react-select';
import './selectUser.sass'


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
                        value:usersData[user].id, label: <div><img alt='user avatar' src={usersData[user].avatarURL} height="30px" width="30px"/> {usersData[user].name} </div>
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
        <div className='select-container'>
            <p>Login to continue</p>
            <Select
                options={options}
                onChange={(evt) => handleSelect(evt.value)}
                placeholder={"Select User..."}
                theme={ theme => ({
                    ...theme,
                    borderRadius: '7px',
                    colors:{
                        ...theme.colors,
                        primary: '#151e3f'
                    }
                })}
            />

            <div  onClick={handleLoginButton} className='remove-deco' >
                <div className='accent-button'>
                    login
                </div>
            </div>

        </div>
    )
}

export default SelectUser