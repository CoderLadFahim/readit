import React, { useEffect, useState } from 'react';
import '../App.css';
import { useSubredditData, useSubreddits } from '../hooks';


const LeaderBoard = () => {
    const [shortenSubreddits, setShortenSubreddits] = useState([])

    const subreddits = useSubreddits()
    
    useEffect(()=>{

        setShortenSubreddits(subreddits.slice(0,4)) 
       
    },[])

    return (
        <div className='leader-board'>
            <div className='top'> Top Communities</div>
          {
              shortenSubreddits.map(data => {
                  
                  return <>
                            <div className='subreddit'>
                                <h4>{data.display_name}</h4>
                                <span className='text-span'> {data.subscribers} memebrship</span>
                            </div>
                        
                        </>
              })
          }
            <div className='bottom'> View All </div>
        </div>
    );
};

export default LeaderBoard;