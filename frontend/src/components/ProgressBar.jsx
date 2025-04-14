import { NavLink } from 'react-router-dom';


function ProgressBar() {
    return (
        <div className='pb-wrapper'>
            <div className='progress-bar'></div>

            <div className='progress-text'>5/10 questions completed</div>
        </div>
    )
}

export default ProgressBar;