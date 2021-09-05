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

export const CrossIcon = ({ className }) => (
	<FontAwesomeIcon className={className} icon={faTimes} />
);

export const LinkedInIcon = ({ className }) => (
	<FontAwesomeIcon className={className} icon={faLinkedin} />
);
export const GithubIcon = ({ className }) => (
	<FontAwesomeIcon className={className} icon={faGithub} />
);
export const DiscordIcon = ({ className }) => (
	<FontAwesomeIcon className={className} icon={faDiscord} />
);

export const InfoCircleIcon = ({ className }) => (
	<FontAwesomeIcon className={className} icon={faInfoCircle} />
);
export const SearchIcon = ({ className }) => (
	<FontAwesomeIcon className={className} icon={faSearch} />
);
export const AngleUpIcon = ({ className }) => (
	<FontAwesomeIcon className={className} icon={faAngleUp} />
);
export const ListIcon = ({ className }) => (
	<FontAwesomeIcon className={className} icon={faListOl} />
);
export const CertificateIcon = ({ className }) => (
	<FontAwesomeIcon className={className} icon={faCertificate} />
);
export const FireIcon = ({ className }) => (
	<FontAwesomeIcon className={className} icon={faFire} />
);
export const CommentIcon = ({ className }) => (
	<FontAwesomeIcon className={className} icon={faCommentAlt} />
);
export const ArrowUpIcon = ({ className }) => (
	<FontAwesomeIcon className={className} icon={faArrowUp} />
);
export const ArrowDownIcon = ({ className }) => (
	<FontAwesomeIcon className={className} icon={faArrowDown} />
);
