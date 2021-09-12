import { useEffect } from 'react';
import { CrossIcon } from '../icons';
import { useComments } from '../hooks';

function CommentsModal({ permalink }) {
	const placeholderPermalink =
		'/r/nextfuckinglevel/comments/pmj58z/miami_fans_save_cat_from_falling_of_upper_deck/';

	const TEMP_COMMENTS = useComments(placeholderPermalink);

	useEffect(() => {
		console.dir(TEMP_COMMENTS);
	}, [TEMP_COMMENTS]);

	return (
		<section className="border border-2 border-red-400">
			{' '}
			<div className="header">
				<h1>Comments on u/knight_monke's post</h1>
				<CrossIcon />
			</div>
			<ul>
				<li className="comment">
					<span className="commenter-name">u/knight_monke</span>
					<p className="comment-text">
						Adipisicing eveniet nulla quidem sunt deleniti. Tempora modi
						esse quasi explicabo nobis! Ipsam natus nobis eveniet
						repellendus architecto ipsam dicta?j
					</p>
				</li>
			</ul>
			<div className="backdrop bg-gray-800 opacity-95 absolute top-0 bottom-0 right-0 left-0 z-10"></div>
		</section>
	);
}

export default CommentsModal;
