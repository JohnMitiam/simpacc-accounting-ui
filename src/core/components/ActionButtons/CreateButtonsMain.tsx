import { Link } from 'react-router-dom';

interface Props {
  to: string;
  onClick: any;
  children?: React.ReactNode;
}

export const CreateButtonMain: React.FC<Props> = ({
  to,
  children,
  onClick,
}) => {
  return (
    <>
      <div>
        <Link
          onClick={onClick}
          to={to}
          className="bg-gray-500 px-4 py-2 rounded-md hover:shadow-md
          font-semibold text-white"
        >
          {children}
        </Link>
      </div>
    </>
  );
};
