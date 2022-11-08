import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { useEffect, useReducer, useRef } from 'react';
import { useData } from '../hooks/data-context';

// 
export const Mark = ({ book, mark }) => {
  const { saveMark, removeMark } = useData();
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, !mark.id);
  const urlRef = useRef();

  const save = () => {
    if (isEditing) {
      mark.image = null;
      mark.title = 'TTT';
      mark.description = 'DDD';
      mark.url = urlRef.current.value;
      saveMark(book, mark);
    }
    toggleEditing();
  };

  useEffect(() => {
    if (urlRef.current)
      urlRef.current.value = mark.url || 'https://tailwindcss.com';
  }, [isEditing]);

  return (
    <div className='mb-1 box-border border-2 border-cyan-400 p-1'>
      {isEditing ? (
        <>
          <input
            type='text'
            ref={urlRef}
            className='mb-2 w-full rounded p-1.5'
            placeholder='https://....'
          />
        </>
      ) : (
        <div>
          <div>
            {mark.image && (
              <img
                src={mark.image}
                alt={mark.title}
                className='max-h-[100px] w-full'
              />
            )}
          </div>
          <h3 className='m-1 font-medium text-slate-700'>
            {mark.id}.{mark.title}
          </h3>
          <p className='m-1 text-sm text-gray-500'>{mark.description}</p>
        </div>
      )}
      <div className='item-center mr-3 flex justify-end'>
        <button
          onClick={save}
          className='mb-1 mr-1 rounded-full bg-cyan-400 p-2 hover:bg-cyan-500'
        >
          <PencilSquareIcon className='h-4 text-white' />
        </button>
        <button
          onClick={() => removeMark(book, mark.id)}
          className='mb-1 rounded-full bg-rose-400 p-2 hover:bg-rose-500'
        >
          <TrashIcon className='h-4 text-white' />
        </button>
      </div>
    </div>
  );
};
