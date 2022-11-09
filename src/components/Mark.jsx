import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { useEffect, useReducer, useRef, useState } from 'react';
import { useData } from '../hooks/data-context';
import nobook from '../assets/nobook1.png';

export const Mark = ({ book, mark }) => {
  const { saveMark, removeMark } = useData();
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, !mark.id);
  const [isHovering, setIsHovering] = useState(false);
  const imgRef = useRef();
  const titleRef = useRef();
  const desRef = useRef();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const save = () => {
    if (isEditing) {
      mark.image = imgRef.current.value;
      if (mark.image === '') {
        mark.image = nobook;
      } else {
        mark.image = imgRef.current.value;
      }
      mark.title = titleRef.current.value;
      mark.description = desRef.current.value;
      mark.url = imgRef.current.value;
      saveMark(book, mark);
    }
    toggleEditing();
  };

  useEffect(() => {
    if (imgRef.current) imgRef.current.value = mark.image;
    if (titleRef.current) titleRef.current.value = mark.title;
    if (desRef.current) desRef.current.value = mark.description;
  }, [isEditing]);

  return (
    <div
      className='mb-1 box-border border-2 border-cyan-400 bg-local p-1'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isEditing ? (
        <>
          <input
            type='text'
            ref={imgRef}
            className='mb-2 w-full rounded p-1.5'
            placeholder='이미지 링크'
          />
          <input
            type='text'
            ref={titleRef}
            className='mb-2 w-full rounded p-1.5'
            placeholder='책 제목'
          />
          <input
            type='text'
            ref={desRef}
            className='mb-2 w-full rounded p-1.5'
            placeholder='좋아하는 구절, 감상평'
          />
        </>
      ) : (
        <div>
          {mark.image && (
            <img
              src={mark.image}
              alt={mark.title}
              className='max-h-[200px] w-full p-1.5'
            ></img>
          )}
        </div>
      )}

      {isHovering && (
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
      )}
    </div>
  );
};
