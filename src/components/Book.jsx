import { useReducer, useState } from 'react';
import { ArrowPathIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';
import { Mark } from './Mark';
import { useData } from '../hooks/data-context';

export const Book = ({ book }) => {
  const { saveBook, removeBook, addMark, searchStr } = useData();
  const [bookTitle, setBookTitle] = useState(book.title);
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);

  const changeBookTitle = () => {
    book.title = bookTitle;
    saveBook(book);
    toggleEditing();
  };

  return (
    <div className='mr-3 w-64 flex-shrink-0 rounded bg-gray-500 p-1.5'>
      <div className='flex items-center justify-between text-xl font-bold text-white mb-1'>
        <h3 className='pl-2 pt-1 truncate'>{book?.title}</h3>
        <button
          onClick={toggleEditing}
          className='text-sm text-cyan-400 hover:text-cyan-600'
        >
          {isEditing ? (
            <ArrowPathIcon className='w-5 text-gray-300' />
          ) : (
            <Cog8ToothIcon className='w-5 text-gray-300' />
          )}
        </button>
      </div>
      <div className='h-[66vh] scroll-smooth xs:h-[68vh] sm:h-[70vh] md:h-[72vh] xl:h-[74vh] overflow-y-scroll scrollbar-hide'>
        {book?.id === 0 || isEditing ? (
          <div className='p-1.5'>
            <input
              type='text'
              value={bookTitle}
              onChange={(evt) => setBookTitle(evt.target.value)}
              className='w-full rounded px-1'
              placeholder='타이틀...'
            />
            <button
              onClick={() => removeBook(book.id)}
              className='float-left text-rose-400 hover:text-rose-600'
            >
              Remove
            </button>
            <button
              onClick={changeBookTitle}
              className='float-right text-cyan-400 hover:text-cyan-600'
            >
              Save
            </button>
          </div>
        ) : book?.marks?.length ? (
          book?.marks
            .filter((mark) =>
              RegExp(searchStr, 'i').exec(
                `${mark.url} ${mark.title} ${mark.description}`
              )
            )
            .map((mark) => <Mark key={mark.id} book={book} mark={mark} />)
        ) : (
          <hr className='border-3 mt-0 mb-3 border-white' />
        )}
      </div>
      {book.marks.find((mark) => !mark.id) ? (
        ''
      ) : (
        <button
          onClick={() => addMark(book)}
          className='float-right mt-2 mb-1 mr-2 rounded-sm bg-gray-300 px-4 py-1 font-medium text-slate hover:bg-orange-500'
        >
          + Add Book
        </button>
      )}
    </div>
  );
};
