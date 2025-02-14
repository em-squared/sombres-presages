import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBluesky,
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsSa,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export const projectTitle = "Sombres Présages";
const projectRepository = "https://github.com/em-squared/sombres-presages";
const authorName = "Maxime Moraine";
const authorLink = "https://bsky.app/profile/em-squared.bsky.social";

export default {
  head() {
    const { asPath } = useRouter();
    const { title, frontMatter } = useConfig();
    const url = `${process.env.URL}${asPath}`;
    const pageTitle =
      title && asPath !== "/"
        ? `${title} | ${projectTitle}`
        : `${projectTitle}`;
    const pageDescription =
      frontMatter.description || "Jouer pour voir ce qui va se passer";

    return (
      <>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </>
    );
  },
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
      <div className="flex-1">
        <div className="text-center">
          <FontAwesomeIcon icon={faCreativeCommons} size="xl" />{" "}
          <FontAwesomeIcon icon={faCreativeCommonsBy} size="xl" />{" "}
          <FontAwesomeIcon icon={faCreativeCommonsSa} size="xl" /> 4.0{" "}
        </div>
        <div className="text-center">
          <a href={authorLink} target="_blank">
            {authorName}
          </a>
        </div>
      </div>
    ),
  },
};
