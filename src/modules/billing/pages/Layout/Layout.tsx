import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ToggleButtonContainer } from '@components/ButtonSwitchContainer/ButtonToggleContainer';
import { Moon } from '@components/ButtonSwitchContainer/React-Icon/Moon';
import { Sun } from '@components/ButtonSwitchContainer/React-Icon/Sun';

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  const notify = () => {
    toast.success('Let There Be Light', {
      position: toast.POSITION.TOP_CENTER,
      theme: 'colored',
      autoClose: 2000,
    });
  };
  const [letThereBeLightBut, setLetThereBeLightBut] = useState(true);
  const [bgColor, setBgColor] = useState('white');
  const [letsGetDarkBut, setLetsGetDarkBut] = useState(false);

  const handleLetTherebeLightBut = () => {
    {
      notify;
    }
    setBgColor('white');
    setLetThereBeLightBut(true);
    setLetsGetDarkBut(false);

    // alert('Let There Be Light');
  };

  const selLetThereBeLightButClass = letThereBeLightBut
    ? 'stroke-[#FCE570] stroke-1 px-2 rounded-full border-2 border-gray-200 bg-black shadow-md'
    : 'stroke-black px-2 rounded-full';

  const handleLetsDarkBut = () => {
    setBgColor('#909090');
    setLetThereBeLightBut(false);
    setLetsGetDarkBut(true);

    // alert('Lets Get Dark');
  };

  const selLetsDarkButClass = letsGetDarkBut
    ? 'stroke-white stroke-1 px-2 rounded-full border-2 border-gray-200 bg-black shadow-md'
    : 'stroke-black px-2 rounded-full';

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <>
      <ToggleButtonContainer>
        <button
          onClick={() => handleLetTherebeLightBut()}
          className={`${selLetThereBeLightButClass}`}
        >
          <Sun />
        </button>
        <ToastContainer />
        <button
          onClick={() => handleLetsDarkBut()}
          className={`${selLetsDarkButClass}`}
        >
          <Moon />
        </button>
      </ToggleButtonContainer>
      <div className="bg-sky-900 py-8">
        <h1 className="text-4xl text-center text-yellow-100">Contact App</h1>
      </div>
      <div className=" mx-auto">{children}</div>
    </>
  );
};
