// import { useNavigate } from 'react-router-dom';

// import { routes } from '@config/routes';

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <div className="bg-sky-900 py-8">
        <h1 className="text-4xl text-center text-yellow-100">Contact App</h1>
      </div>
      <div className="bg-slate-200 mx-auto">{children}</div>
    </>
  );
};
