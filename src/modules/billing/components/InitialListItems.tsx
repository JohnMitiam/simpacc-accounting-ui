import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line import/order
import { ToastContainer, toast } from 'react-toastify';

import { DeleteButton } from '@components/ActionButtons/DeleteButton';
import { DetailsButton } from '@components/ActionButtons/DetailsButton';
import { UpdateButton } from '@components/ActionButtons/UpdateButton';
import { TdClass } from '@components/TableContainers/TdClass';

interface InitialListProps {
  item: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    description: string;
    birthday: string;
  };
}

export const InitialListItems: React.FC<InitialListProps> = ({ item }) => {
  const update = () => {
    toast.success('Update SuccessFully', {
      position: toast.POSITION.TOP_LEFT,
      theme: 'colored',
      autoClose: 1000,
    });
  };

  const notifydDel = () => {
    toast.error('Deleted SuccessFully', {
      position: toast.POSITION.TOP_LEFT,
      theme: 'colored',
      autoClose: 1000,
    });
  };

  const handleUpdateClick = () => {
    update();
  };

  const handleDeleteClick = () => {
    notifydDel();
  };

  return (
    <tr key={item.id}>
      <TdClass>
        <div className="flex justify-center">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap font-semibold">
              {item.firstName}
            </p>
          </div>
        </div>
      </TdClass>
      <TdClass>
        <div className="flex justify-center">
          <p className="text-gray-900 whitespace-no-wrap font-semibold">
            {item.lastName}
          </p>
        </div>
      </TdClass>
      <TdClass>
        <div className="flex justify-center">
          <a href="#" className="text-gray-900 whitespace-no-wrap underline">
            {item.email}
          </a>
        </div>
      </TdClass>
      <TdClass>
        <div className="flex justify-center">
          <p className="text-gray-900 whitespace-no-wrap">{item.description}</p>
        </div>
      </TdClass>
      <TdClass>
        <div className="flex justify-center">
          <p className="text-gray-900 whitespace-no-wrap">{item.birthday}</p>
        </div>
      </TdClass>
      <TdClass>
        <div className="flex justify-center space-x-2">
          <UpdateButton onClick={handleUpdateClick} />
          <ToastContainer />
          <DetailsButton onClick={''} />
          <DeleteButton onClick={handleDeleteClick} />
          <ToastContainer />
        </div>
      </TdClass>
    </tr>
  );
};
