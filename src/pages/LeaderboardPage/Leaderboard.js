import { useSelector } from "react-redux"

function Leaderboard(){
    // Get Users from redux
    const usersData = useSelector(state => state.users)

    // Extract (name, avatar, answered questions, asked questions)
    const leaderboardData = Object.keys(usersData).map(user => ({
        name: usersData[user].name,
        avatar: usersData[user].avatarURL,
        answeredQ: Object.keys(usersData[user].answers).length,
        askedQ: usersData[user].questions.length,
        score: Object.keys(usersData[user].answers).length + usersData[user].questions.length
    }))

    // sort leaderboard
    const sortedLeaderboard = leaderboardData.sort((a, b) => (a.score > b.score) ? -1 : 1)

    return(
        <div>
            Leaderboard
        </div>
    )
}
export default Leaderboard