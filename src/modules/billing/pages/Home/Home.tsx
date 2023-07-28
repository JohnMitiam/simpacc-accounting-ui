import { list } from 'src/models/initialList.ts';
import { InitialListItems } from 'src/modules/InitialList/InitialListItems';

export const Home = () => {
  return (
    <>
      <div className="text-center py-10">
        <div className="container max-w-3xl px-4 mx-auto sm:px-8">
          <div className="py-8">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal shadow-lg">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        namaewa
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        description
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Created at
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        status
                      </th>
                      <th
                        scope="col"
                        className="px-16 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((current) => (
                      <InitialListItems key={current.id} item={current} />
                    ))}
                    {/* <tr>
                      <TdClass>Kozuki Oden</TdClass>
                      <TdClass>Shogun</TdClass>
                      <TdClass>07/28/2023</TdClass>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                          ></span>
                          <span className="relative">active</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex items-center">
                          <p className="text-gray-900 whitespace-no-wrap">
                            <div className="space-x-2">
                              <button className="px-6 py-2 bg-green-400 rounded-md hover:shadow-md text-white font-semibold">
                                Edit
                              </button>
                              <button className="px-6 py-2 bg-red-400 rounded-md hover:shadow-md text-white font-semibold">
                                Delete
                              </button>
                            </div>
                          </p>
                        </div>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
