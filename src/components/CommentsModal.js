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
		document.body.style.overflowY = 'hidden';
		return () => {
			document.body.style.overflowY = 'scroll';
		};
	}, [postComments]);

	return (
		<section className="modal-container border border-2 border-red-400 text-white">
			<div className="backdrop bg-gray-800 opacity-95 absolute top-0 bottom-0 right-0 left-0 z-40"></div>{' '}
			{postComments && (
				<div className="comments-modal container h-5/6  bg-gray-600 z-50 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl ">
					<div className="header px-5">
						<h1>
							Comments on u/{postComments.parentPostAuthorName}'s post
						</h1>
						<CrossIcon />
					</div>
					<ul className="w-11/12 my-0 mx-auto h-5/6 overflow-scroll">
						{postComments.comments.map((comment, i) => (
							<li
								className="comment text-white mb-3 bg-gray-500 rounded-lg px-3 py-2"
								key={i}
							>
								<span className="block commenter-name text-gray-700 font-bold mb-2">
									u/{comment.commentAuthor}
								</span>
								<p className="comment-text font-nunito">
									{comment.commentText}
								</p>
							</li>
						))}
					</ul>
				</div>
			)}
		</section>
	);
}

export default CommentsModal;
