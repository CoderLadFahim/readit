import React from 'react';
import '../App.css'
import { useComments } from '../hooks';
import LeaderBoard from './LeaderBoard';

const MainPage = (props) => {
    let comments = useComments(props.posts[0].permalink)
    
   
    return (
        
        <main className="post container">
            {
                props.posts.map(post => {
                    return  <div className=" container post-detail bg-gray-700   ">
                        
                    <h4>
                        <span>{post.subreddit_name_prefixed}</span>
                        <span>posted by/{post.author}</span>
                    </h4>
                    <div>
                        <h2 className='title'>{post.title}</h2>
                    </div>
                    <div className='post-btn'>
        
                        <div className="left">
                        <button className='btn upvote'>Upvotes<span>{post.ups}</span></button>
                        <button className='btn downvote'>Downvotes<span>{post.downs}</span></button>
                        </div>
        
                        <div className='right'>
                        <button className='btn comment'>Comments<span>{comments.length}</span></button>
                        </div>
                        
                        
                    </div>
                </div>
                } )
            }
    
        </main>
    );
};

export default MainPage;


/*
	 returns an array of postObjs
	 properties needed from the post objects: 
	 		title, over_18 (hide the post if true), author, permalink(need this to fetch comments), subreddit_name_prefixed, ups, downs,
	*/