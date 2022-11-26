const DashboardLodaing = async () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <section className='flex flex-col gap-y-3'>
        <h3 className='bg-gray-400 w-40 h-5 rounded-lg animate-pulse' />
        <div className='w-full h-14 overflow-hidden relative'>
          <div className='flex absolute left-0 top-0 w-full pb-3 overflow-x-scroll whitespace-nowrap gap-4'>
            {[...Array(6)]
              .map(e => ~~(Math.random() * 15) + 10)
              .map((k, i) => (
                <div key={i} className='bg-white text-gray-900 px-4 py-2 rounded-lg min-w-max text-lg animate-pulse'>
                  <div className='bg-gray-300 rounded-lg'>
                    <span className='opacity-0'>
                      {Math.random()
                        .toString(36)
                        .substring(2, k + 2)}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-y-3'>
        <h3 className='bg-gray-400 w-48 h-5 rounded-lg animate-pulse' />
        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          {[...Array(4)].map((_, i) => (
            <div key={i} className='p-4 bg-white rounded-lg relative animate-pulse'>
              <div className='bg-gray-500 w-32 h-5 rounded-lg mb-2' />
              <p className='bg-gray-700 w-20 h-8 rounded-lg' />
              <div className='bg-gray-100 w-12 h-12 rounded-md absolute right-4 top-4' />
            </div>
          ))}
        </div>
      </section>

      {[...Array(2)].map((_, i) => (
        <section key={i} className='flex flex-col gap-y-3'>
          <h3 className='bg-gray-400 w-56 h-5 rounded-lg animate-pulse' />

          <table className='table-auto col-span-full w-full text-sm bg-white rounded-xl overflow-hidden mb-12 animate-pulse'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='px-4 py-3 opacity-0'>_</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, i) => (
                <tr key={i} className='border-t border-t-gray-200 text-gray-700 transition-all duration-100 hover:bg-gray-50'>
                  <td className='px-4 py-3 opacity-0'>_</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
};

export default DashboardLodaing;
