import img from '../../assets/avatars/a2.png'
import './leaderboardInfo.sass'

function LeaderboardInfo(props){
    const {usr} = props
    
    return (
        <div className='Info-container'>
            <div className='info-user'>
                <img src={img} />
                <p className='buttomP'>{usr.name}</p>
            </div>

            <hr/>
            <div className='info-questions'>
                <p>Answered Questions : {usr.answeredQ}</p>
                <p className='buttomP'>Asked Questions : {usr.askedQ}</p>
            </div>

            <hr />
            <div className='info-score'>
                <p>Score</p>
                <p className='buttomP score'>{usr.score}</p>
            </div>
        </div>
    )
}
export default LeaderboardInfo