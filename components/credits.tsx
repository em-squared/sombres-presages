type CreditsProps = {
  credits: string;
};

const Credits = ({ credits }: CreditsProps) => (
  <>
    <span className="text-sm text-gray-400">Crédits image &copy;{credits}</span>
  </>
);

export { Credits };
