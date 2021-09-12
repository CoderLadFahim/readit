import { useEffect } from 'react';
import { CrossIcon } from '../icons';
import { useComments } from '../hooks';

function CommentsModal({ permalink }) {
	const placeholderPermalink =
		'/r/nottheonion/comments/pn0pht/emma_raducanu_whose_stunning_victory_at_the_us/';

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
				<div
					className="comments-modal w-11/12 h-5/6 bg-gray-600
					z-50 absolute left-1/2 top-1/2 transform -translate-x-1/2
					-translate-y-1/2 rounded-xl"
				>
					{' '}
					<div className="header w-11/12 my-0 mx-auto py-5 mb-2 flex items-center justify-between">
						<h1 className="font-bold text-sm">
							Comments on{' '}
							<span className="text-red-400">
								u/{postComments.parentPostAuthorName}'s
							</span>{' '}
							post
						</h1>
						<CrossIcon className="text-blue-400" />
					</div>
					<ul
						id="comments"
						className="w-11/12 my-0 mx-auto h-5/6 overflow-scroll rounded-lg"
					>
						{postComments.comments.map(
							(comment, i) =>
								comment.commentText && (
									<li
										className="comment text-white mb-2  bg-gray-500 rounded-lg px-3 py-2"
										key={i}
									>
										<span className="block commenter-name text-gray-300  mb-2 text-xs">
											u/{comment.commentAuthor}
										</span>
										<p className="comment-text font-nunito font-bold">
											{comment.commentText}
										</p>
									</li>
								)
						)}
					</ul>
				</div>
			)}
		</section>
	);
}

export default CommentsModal;
