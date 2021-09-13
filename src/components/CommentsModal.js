import { useEffect } from 'react';
import { CrossIcon } from '../icons';
import { useComments } from '../hooks';

function CommentsModal({ permalink }) {
	const placeholderPermalink =
		'/r/nottheonion/comments/pn0pht/emma_raducanu_whose_stunning_victory_at_the_us/';

	const postComments = useComments(
		permalink ? permalink : placeholderPermalink
	);

	const closeModal = (params) => {
		console.log('close modal');
	};

	useEffect(() => {
		document.body.style.overflowY = 'hidden';
		return () => {
			document.body.style.overflowY = 'scroll';
		};
	}, [postComments]);

	return (
		<section className="modal-container border border-2 border-red-400 text-white">
			{/* BACKDROP */}
			<div
				className="backdrop bg-gray-800 opacity-95 absolute top-0 bottom-0 right-0 left-0 z-40"
				onClick={closeModal}
			></div>{' '}
			{/* COMMENTS MODAL */}
			{postComments && (
				<div
					className="comments-modal w-11/12 h-5/6 bg-gray-600
					z-50 absolute left-1/2 top-1/2 transform -translate-x-1/2
					-translate-y-1/2 rounded-xl sm:flex sm:flex-col sm:justify-around sm:w-5/6 lg:w-3/4 xl:w-4/6 xl:block 2xl:flex 2xl:w-1/2  2xl:justify-evenly"
				>
					{/* MODAL HEADER */}
					<div className="header w-11/12 my-0 mx-auto py-5 mb-2 flex items-center justify-between">
						<h1 className="font-bold text-sm sm:text-xl xl:text-sm">
							Comments on{' '}
							<span className="text-red-400">
								u/{postComments.parentPostAuthorName}'s
							</span>{' '}
							post
						</h1>
						<CrossIcon
							className="text-blue-400 transform sm:scale-125 cursor-pointer hover:scale-150"
							onClick={closeModal}
						/>
					</div>

					{/* COMMENTS CONTAINER */}
					<ul
						id="comments"
						className="w-11/12 my-0 mx-auto h-5/6 overflow-scroll rounded-lg"
					>
						{/* COMMENTS */}
						{postComments.comments.map(
							(comment, i) =>
								comment.commentText && (
									<li
										className="comment text-white mb-2 sm:mb-3 bg-gray-500 rounded-lg px-3 py-2"
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
