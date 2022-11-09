import {
  TrashIcon,
  PencilSquareIcon,
  ArrowUturnLeftIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useReducer, useRef, useState } from 'react';
import ky from 'ky';
import { useData } from '../hooks/data-context';
import nobook from '../assets/nobook1.png';

export const Mark = ({ book, mark }) => {
  const { saveMark, removeMark } = useData();
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, !mark.id);
  const [isHovering, setIsHovering] = useState(false);
  // !
  const imgRef = useRef();
  const titleRef = useRef();
  const desRef = useRef();

  const scrapOg = async (url) => {
    return await ky(`https://sz.topician.com/sz/proxy?url=${url}`).json();
  };
  // !
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  // !
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const save = (evt) => {
    evt.stopPropagation();

    if (isEditing) {
      const url = imgRef.current.value;
      mark.image = imgRef.current.value;
      if (mark.image === '') {
        mark.image = nobook;
      } else {
        mark.image = imgRef.current.value;
      }
      mark.title = titleRef.current.value;
      mark.description = desRef.current.value;
      mark.url = imgRef.current.value;
      scrapOg(url)
        .then((ogRet) => {
          console.log('ogRet>>>', ogRet);
          mark.title = ogRet.title || 'No Title';
          mark.image = ogRet.image;
          // mark.description = ;
          saveMark(book, mark);
        })
        .catch((error) => {
          mark.image = ogRet.image || nobook;
          mark.title = 'ERROR!! ' + error.message;
          mark.description = 'Please remove this!';
          saveMark(book, mark);
        });
    }
    toggleEditing();
  };

  useEffect(() => {
    if (imgRef.current) imgRef.current.value = mark.image || 'https://lhk6819.github.io/rpa_mylib';
    if (titleRef.current) titleRef.current.value = mark.title;
    if (desRef.current) desRef.current.value = mark.description;
  }, [isEditing]);

  return (
    <div
      className='mb-1 box-border bg-local p-1'
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
              className='max-h-[220px] w-full px-1 pt-1'
            ></img>
          )}
        </div>
      )}

      {isHovering && (
        <div className='item-center mr-3 flex justify-end'>
          <button
            onClick={save}
            className='mt-2 mr-2 rounded-full bg-cyan-400 p-2 hover:bg-cyan-500'
          >
            <PencilSquareIcon className='h-4 text-white' />
          </button>
          <button
            onClick={() => removeMark(book, mark.id)}
            className='mt-2 mr-2 rounded-full bg-rose-400 p-2 hover:bg-rose-500'
          >
            <TrashIcon className='h-4 text-white' />
          </button>
          {isEditing && (
            <button
              onClick={(evt) => {
                evt.stopPropagation();
                toggleEditing();
              }}
              className='mt-2 rounded-full bg-slate-300 p-2 hover:bg-slate-500'
            >
              <ArrowUturnLeftIcon className='h-4 text-white' />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
