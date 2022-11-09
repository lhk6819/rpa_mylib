// import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { useData } from '../hooks/data-context';

export const Nav = () => {
  const { searchStr, setSearchStr } = useData();

  return (
    <nav className='flex items-center justify-between px-2 shadow'>
      <div>
        <h1 className='flex text-3xl font-bold p-2'>
          <BookOpenIcon className='w-9 text-slate-500' />
          <h1 className='text-3xl font-bold p-2'>Fire Index</h1>
        </h1>
      </div>
      <div>
        {/* <MagnifyingGlassCircleIcon className='w-4 absolute h-8' /> */}
        <input
          type='text'
          value={searchStr}
          onChange={(evt) => setSearchStr(evt.target.value)}
          placeholder='search...'
          className='h-6 w-24 rounded border border-slate-300 px-2'
        />
      </div>
    </nav>
  );
};
