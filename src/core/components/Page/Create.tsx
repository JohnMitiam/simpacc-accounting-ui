import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CreateButton } from '@components/ActionButtons/CreateButtons';
import { UpdateButtonCreate } from '@components/ActionButtons/UpdateButtonCreate';
import { InputText } from '@components/Form/InputText';

export const Create = () => {
  const create = () => {
    toast.success('Created SuccessFully', {
      position: toast.POSITION.TOP_RIGHT,
      theme: 'colored',
      autoClose: 500,
    });
  };

  const handleCreateClick = () => {
    create();
  };

  return (
    <>
      <div className="flex py-4">
        <div className="container max-w-7xl px-4 mx-auto sm:px-8">
          <div className="">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="bg-white pl-96 py-8 inline-block min-w-full overflow-hidden rounded-lg shadow">
                <InputText name="name" placeholder="First Name" />
                <InputText name="name" placeholder="Last Name" />
                <InputText name="email" placeholder="Email" />
                <InputText name="name" placeholder="Description" />
                <InputText name="name" placeholder="Birthday" />
                <div className="px-32 pt-4 space-x-4">
                  <UpdateButtonCreate onClick={''} />
                  <CreateButton onClick={handleCreateClick} />
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
