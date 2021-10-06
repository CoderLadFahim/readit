import { useEffect } from 'react';
import { CrossIcon } from '../icons';
import { useComments } from '../hooks';

function CommentsModal({ permalink, modalHider }) {
	const placeholderPermalink =
		'/r/funny/comments/pzhyr0/this_man_is_talented/';

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
			<div
				className="backdrop bg-gray-800 opacity-95 fixed top-0 bottom-0 right-0 left-0 z-40"
				onClick={modalHider}
			></div>
			<div
				className="comments-modal w-11/12 h-5/6 bg-gray-600
					z-50 fixed left-1/2 top-1/2 transform -translate-x-1/2
					-translate-y-1/2 rounded-xl sm:flex sm:flex-col sm:justify-around sm:w-5/6 lg:w-3/4 xl:w-4/6 2xl:flex 2xl:w-1/2  2xl:justify-evenly"
			>
				<div className="header w-11/12 my-0 mx-auto py-5 mb-2 flex items-center justify-between">
					{postComments ? (
						<h1 className="text-sm sm:text-xl xl:text-sm">
							Comments on{' '}
							<span className="text-red-400">
								u/{postComments.parentPostAuthorName}
							</span>
							's post
						</h1>
					) : (
						<div className="skeleton w-1/2 h-5 animate-pulse bg-gray-500 opacity-95 rounded-xl"></div>
					)}
					<CrossIcon
						className="text-blue-400 transform sm:scale-125 cursor-pointer hover:scale-150"
						onClick={modalHider}
					/>
				</div>

				<ul
					id="comments"
					className="w-11/12 my-0 mx-auto h-5/6 overflow-scroll rounded-lg 2xl:mt-0 xl:mb-5"
				>
					{postComments ? (
						postComments.comments.map(
							(comment, i) =>
								comment.commentText && (
									<li
										className="comment text-white mb-3 sm:mb-4 border border-gray-500  rounded-xl px-3 py-2 shadow"
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
						)
					) : (
						<>
							{new Array(10).fill(null).map((I, i) => (
								<li
									key={i}
									className="skeleton rounded bg-gray-500 w-full h-24 opacity-50 animate-pulse mb-2"
									style={{
										height: Math.floor(Math.random() * 10 + 10) + '%',
									}}
								></li>
							))}
						</>
					)}
				</ul>
			</div>
		</section>
	);
}

export default CommentsModal;
