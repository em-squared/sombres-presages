import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBluesky,
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsSa,
} from "@fortawesome/free-brands-svg-icons";

const projectTitle = "Sombres Présages";
const projectRepository = "https://github.com/em-squared/sombres-presages";
const authorName = "Maxime Moraine";
const authorLink = "https://bsky.app/profile/em-squared.bsky.social";

export default {
  logo: <span>{projectTitle}</span>,
  project: {
    link: projectRepository,
  },
  author: {
    name: authorName,
    link: authorLink,
  },
  chat: {
    link: "https://bsky.app/profile/em-squared.bsky.social",
    icon: <FontAwesomeIcon icon={faBluesky} size="xl" />,
  },
  docsRepositoryBase: projectRepository,
  footer: {
    content: (
      <span>
        <FontAwesomeIcon icon={faCreativeCommons} size="xl" />{" "}
        <FontAwesomeIcon icon={faCreativeCommonsBy} size="xl" />{" "}
        <FontAwesomeIcon icon={faCreativeCommonsSa} size="xl" /> 4.0{" "}
        <a href={authorLink} target="_blank">
          {authorName}
        </a>
      </span>
    ),
  },
};
