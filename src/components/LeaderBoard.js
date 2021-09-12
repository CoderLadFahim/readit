import React from 'react';

const LeaderBoard = () => {
    return (
        <div className='leader-board'>
            <div className='top'> Top Communities</div>
            <div className='subreddit'>
                <h4>r/birbs</h4>
                <span className='text-span'> 180000 memebrship</span>
            </div>
            <div className='subreddit'>
                <h4>r/birbs</h4>
                <span className='text-span'> 180000 memebrship</span>
            </div>
            <div className='subreddit'>
                <h4>r/birbs</h4>
                <span className='text-span'> 180000 memebrship</span>
            </div>
           
            <div className='bottom'> View All </div>
        </div>
    );
};

export default LeaderBoard;