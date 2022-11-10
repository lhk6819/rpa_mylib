// import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { useData } from '../hooks/data-context';
import { useToggleSlider } from 'react-toggle-slider';
import { useEffect } from 'react';

export const Nav = () => {
  const { searchStr, setSearchStr, searchComple, setSearchComple } = useData();

  return (
    <nav className='flex justify-between px-2'>
      <div className='w-screen h-[5vh]'>
        <div className='flex text-3xl font-bold p-2'>
          <BookOpenIcon className='w-9 text-slate-500' />
          <h1 className='text-3xl font-bold p-2'>Fire Index</h1>
        </div>
      </div>
      <div>
        <label
          for='disabled-toggle'
          class='inline-flex relative items-center mb-5 cursor-pointer'
        >
          <input
            type='checkbox'
            onChange={() => setSearchComple(!searchComple)}
            value={searchComple}
            id='disabled-toggle'
            class='sr-only peer'
          />
          <div class="fixed right-[200px] top-7 w-11 h-6 bg-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-rose-600"></div>
        </label>
        <input
          type='text'
          value={searchStr}
          onChange={(evt) => setSearchStr(evt.target.value)}
          placeholder='검색 '
          className='fixed right-6 top-6 h-8 w-40  rounded-sm text-right border border-slate-300 px-2'
        />
      </div>
    </nav>
  );
};
