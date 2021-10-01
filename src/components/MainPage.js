// you don't have to import react in every file anymore
import { useState, useEffect } from 'react';
import '../App.css';
import { useComments } from '../hooks';
import { ArrowDownIcon, ArrowUpIcon, CommentIcon } from '../icons';
import CustomSubredditIcon from './CustomSubredditIcon';
import CommentsModal from './CommentsModal';
import Post from './Post';

const MainPage = (props) => {
	let comments = useComments(props.posts[0].permalink);
	const [permalinkForComments, setPermalinkForComments] = useState('');

	const showComments = (permalink) => setPermalinkForComments(permalink);

	const hideComments = () => setPermalinkForComments('');

	// useEffect(() => {
	// 	console.dir(props.posts);
	// }, [props.posts]);

	return (
		<main className="post">
			{props.posts &&
				props.posts.map((post, i) => {
					return <Post post={post} key={i} />;
				})}
		</main>
	);
};

export default MainPage;

/*
	 returns an array of postObjs
	 properties needed from the post objects: 
	 		title, over_18 (hide the post if true), author, permalink(need this to fetch comments), subreddit_name_prefixed, ups, downs,
  whoa, deja vu
	*/
