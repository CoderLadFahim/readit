import { useEffect } from 'react';
import { CrossIcon } from '../icons';
import { useComments } from '../hooks';

function CommentsModal({ permalink }) {
	const placeholderPermalink =
		'/r/nextfuckinglevel/comments/pmj58z/miami_fans_save_cat_from_falling_of_upper_deck/';

	const postComments = useComments(
		permalink ? permalink : placeholderPermalink
	);

	useEffect(() => {
		console.dir(postComments);
	}, [postComments]);

	return (
		<section className="modal-container border border-2 border-red-400 absolute top-0 bottom-0 left-0 right-0 bg-gray-800 text-white font-nunito">
			{' '}
			{postComments && (
				<div className="comments-modal container border border-blue-300">
					<div className="header">
						<h1>
							Comments on u/{postComments.parentPostAuthorName}'s post
						</h1>
						<CrossIcon />
					</div>
					<ul>
						{postComments.comments.map((comment) => (
							<li className="comment text-green-400 mb-3">
								<span className="commenter-name text-blue-300">
									u/{comment.commentAuthor}
								</span>
								<p className="comment-text">{comment.commentText}</p>
							</li>
						))}
					</ul>
				</div>
			)}
		</section>
	);
}

export default CommentsModal;
