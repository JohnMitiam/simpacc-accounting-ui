import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line import/order
import { ToastContainer, toast } from 'react-toastify';

import { SideBar } from './SideBar/SideBar';

import { ToggleButtonContainer } from '@components/ButtonSwitchContainer/ButtonToggleContainer';
import { Moon } from '@components/ButtonSwitchContainer/React-Icon/Moon';
import { Sun } from '@components/ButtonSwitchContainer/React-Icon/Sun';

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  const notifyLight = () => {
    toast.info('Let There Be Light', {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: 'colored',
      autoClose: 10,
    });
  };

  const notifyDark = () => {
    toast.info('Lets Get Dark', {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: 'colored',
      autoClose: 10,
    });
  };

  const [letThereBeLightBut, setLetThereBeLightBut] = useState(true);
  const [bgColor, setBgColor] = useState('white');
  const [letsGetDarkBut, setLetsGetDarkBut] = useState(false);

  const handleLetTherebeLightBut = () => {
    notifyLight();
    setBgColor('white');
    setLetThereBeLightBut(true);
    setLetsGetDarkBut(false);
  };

  const selLetThereBeLightButClass = letThereBeLightBut
    ? 'stroke-[#FCE570] stroke-1 px-4 rounded-full border-2 border-gray-200 bg-black shadow-md'
    : 'stroke-black px-4 rounded-full';

  const handleLetsDarkBut = () => {
    notifyDark();
    setBgColor('#909090');
    setLetThereBeLightBut(false);
    setLetsGetDarkBut(true);
  };

  const selLetsDarkButClass = letsGetDarkBut
    ? 'stroke-white stroke-1 px-4 rounded-full border-2 border-gray-200 bg-black shadow-md'
    : 'stroke-black px-4 rounded-full';

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <>
      <div className=" mx-auto h-full">
        <div className="grid h-full grid-cols-4">
          <SideBar />
          {/* <div className="col-span-1 h-full border border-blue-900 bg-blue-500">
            1
          </div> */}
          {/* This is the HeaderSide */}
          <div className="col-span-3 h-full border border-red-900">
            <div className="bg-green-900 py-6">
              <div>Button</div>
              <ToggleButtonContainer>
                <button
                  onClick={() => handleLetTherebeLightBut()}
                  className={`${selLetThereBeLightButClass}`}
                >
                  <Sun height="24" width="24" />
                </button>
                <ToastContainer />
                <button
                  onClick={() => handleLetsDarkBut()}
                  className={`${selLetsDarkButClass}`}
                >
                  <Moon height="24" width="24" />
                </button>
              </ToggleButtonContainer>
              <h1 className="text-4xl text-center text-yellow-100">
                This is the Header
              </h1>
            </div>
            <div className=" mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
