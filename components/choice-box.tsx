import { faCircle, faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ChoiceBoxProps = {
  exclusive: boolean;
};

const ChoiceBox = ({ exclusive }: ChoiceBoxProps) =>
  (exclusive && (
    <FontAwesomeIcon className="hidden-toc" icon={faCircle} size="xs" />
  )) || <FontAwesomeIcon className="hidden-toc" icon={faSquare} size="xs" />;

export { ChoiceBox };
