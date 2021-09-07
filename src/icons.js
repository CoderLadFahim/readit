import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faListOl } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export const CrossIcon = ({ className, onClick }) => (
	<FontAwesomeIcon className={className} icon={faTimes} onClick={onClick} />
);

export const LinkedInIcon = ({ className, onClick }) => (
	<FontAwesomeIcon className={className} icon={faLinkedin} onClick={onClick} />
);
export const GithubIcon = ({ className, onClick }) => (
	<FontAwesomeIcon className={className} icon={faGithub} onClick={onClick} />
);
export const DiscordIcon = ({ className, onClick }) => (
	<FontAwesomeIcon className={className} icon={faDiscord} onClick={onClick} />
);

export const InfoCircleIcon = ({ className, onClick }) => (
	<FontAwesomeIcon
		className={className}
		icon={faInfoCircle}
		onClick={onClick}
	/>
);
export const SearchIcon = ({ className, onClick }) => (
	<FontAwesomeIcon className={className} icon={faSearch} onClick={onClick} />
);
export const AngleUpIcon = ({ className, onClick }) => (
	<FontAwesomeIcon className={className} icon={faAngleUp} onClick={onClick} />
);
export const ListIcon = ({ className, onClick }) => (
	<FontAwesomeIcon className={className} icon={faListOl} onClick={onClick} />
);
export const CertificateIcon = ({ className, onClick }) => (
	<FontAwesomeIcon
		className={className}
		icon={faCertificate}
		onClick={onClick}
	/>
);
export const FireIcon = ({ className, onClick }) => (
	<FontAwesomeIcon className={className} icon={faFire} onClick={onClick} />
);
export const CommentIcon = ({ className, onClick }) => (
	<FontAwesomeIcon
		className={className}
		icon={faCommentAlt}
		onClick={onClick}
	/>
);
export const ArrowUpIcon = ({ className, onClick }) => (
	<FontAwesomeIcon className={className} icon={faArrowUp} onClick={onClick} />
);
export const ArrowDownIcon = ({ className, onClick }) => (
	<FontAwesomeIcon
		className={className}
		icon={faArrowDown}
		onClick={onClick}
	/>
);
