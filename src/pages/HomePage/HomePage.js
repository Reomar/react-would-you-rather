import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuestionsAction } from "../../store/actionCreator"

function HomePage(){
    const dispatch = useDispatch()

    // Selected questions internal state
    const [display, setDisplay] = useState('notAnswered') 

    // Get Questions from API
    useEffect(()=>{
        dispatch(fetchQuestionsAction())
    })

    const questionsData = useSelector(state => state.questions)

    return(
        <div className='homepage-container'>
            HomePage
        </div>
    )
}
export default HomePage