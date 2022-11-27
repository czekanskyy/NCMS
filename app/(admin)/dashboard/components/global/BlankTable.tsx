const BlankTable = ({ n }: { n: number }) => (
  <table className='table-auto col-span-full w-full text-sm bg-white text-gray-900 rounded-xl overflow-hidden mb-12 animate-pulse'>
    <thead>
      <tr className='bg-gray-100'>
        <th className='px-4 py-3 opacity-0'>n</th>
      </tr>
    </thead>
    <tbody>
      {[...Array(n)].map((_, i) => (
        <tr key={i} className='border-t border-t-gray-200 text-gray-700 transition-all duration-100 hover:bg-gray-50'>
          <td className='px-4 py-3 opacity-0'>_</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default BlankTable;
