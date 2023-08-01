import { Link } from 'react-router-dom';

export const CreateButtonMain = () => {
  return (
    <>
      <div>
        <Link
          to="/create"
          className="bg-gray-500 px-4 py-2 rounded-md hover:shadow-md
          font-semibold text-white"
        >
          + Create
        </Link>
      </div>
    </>
  );
};
