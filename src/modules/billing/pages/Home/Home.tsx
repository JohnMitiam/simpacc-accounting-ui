// import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { CreateButtonMain } from '@components/ActionButtons/CreateButtonsMain';
import { Create } from '@components/Page/Create';
import { list } from 'src/models/initialList.ts';
import { InitialListItems } from 'src/modules/billing/components/InitialListItems';

export const Home = () => {
  return (
    <>
      <div className="text-center py-4">
        <div className="container max-w-7xl px-4 mx-auto sm:px-8">
          <div className="">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="flex justify-end mb-4">
                <CreateButtonMain to="/create">+ Create </CreateButtonMain>
                <Routes>
                  <Route path="/create" element={<Create />}></Route>
                </Routes>
              </div>
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal shadow-lg border-2">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        First Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Birthday
                      </th>
                      <th
                        scope="col"
                        className="px-16 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((current) => (
                      <InitialListItems key={current.id} item={current} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Change</h1>
    </>
  );
};
