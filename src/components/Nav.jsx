// import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { useData } from '../hooks/data-context';

export const Nav = () => {
  const { searchStr, setSearchStr } = useData();

  return (
    <nav className='flex justify-between px-2'>
      <div className='w-screen h-[5vh]'>
        <div className='flex text-3xl font-bold p-2'>
          <BookOpenIcon className='w-9 text-slate-500' />
          <h1 className='text-3xl font-bold p-2'>Fire Index</h1>
        </div>
      </div>
      <div>
        <input
          type='text'
          value={searchStr}
          onChange={(evt) => setSearchStr(evt.target.value)}
          placeholder='검색'
          className='fixed right-6 top-6 h-8 w-40  rounded-sm text-right border border-slate-300 px-2'
        />
      </div>
    </nav>
  );
};
