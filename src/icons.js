import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import {faListOl} from '@fortawesome/free-solid-svg-icons';
import {faCertificate} from '@fortawesome/free-solid-svg-icons';
import {faFire} from '@fortawesome/free-solid-svg-icons';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

export const CrossIcon = () => <FontAwesomeIcon icon={faTimes}/>;

export const LinkedInIcon = () => <FontAwesomeIcon icon={faLinkedin}/>;
export const GithubIcon = () => <FontAwesomeIcon icon={faGithub}/>;
export const DiscordIcon = () => <FontAwesomeIcon icon={faDiscord}/>;


export const InfoCircleIcon = () => <FontAwesomeIcon icon={faInfoCircle}/>;
export const SearchIcon = () => <FontAwesomeIcon icon={faSearch}/>;
export const AngleUpIcon = () => <FontAwesomeIcon icon={faAngleUp}/>;
export const ListIcon = () => <FontAwesomeIcon icon={faListOl}/>;
export const CertificateIcon = () => <FontAwesomeIcon icon={faCertificate}/>;
export const FireIcon = () => <FontAwesomeIcon icon={faFire}/>;
export const CommentIcon = () => <FontAwesomeIcon icon={faCommentAlt}/>;
export const ArrowUpIcon = () => <FontAwesomeIcon icon={faArrowUp}/>;
export const ArrowDownIcon = () => <FontAwesomeIcon icon={faArrowDown}/>;
