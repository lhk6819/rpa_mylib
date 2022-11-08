// import { useReducer, useState } from 'react';
// import { Mark } from './Mark';
// import { useData } from '../hooks/data-context';

export const Book = () => {
  // // data-context.jsx 파일에서 saveBook, removeBook, addMark 기능을 사용.
  // const { saveBook, removeBook, addMark } = useData();
  // // book의 title을 bookTitle에 할당.
  // const [bookTitle, setBookTitle] = useState(book.title);
  // // Edit button에 대한 state를 설정.
  // const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);

  // // bookTitle을 book의 title로 할당하고/ book을 인수로 saveBook을 실행하고/ isEditing의 상태를 변경한다.
  // const changeBookTitle = () => {
  //   book.title = bookTitle;
  //   saveBook(book);
  //   toggleEditing();
  // };

  return (
    // <div className="mr-3 w-64 flex-shrink-0 rounded bg-gray-200 p-1.5">
    //   <div className="h-[76vh] overflow-y-scroll xs:h-[78vh] sm:h-[80vh] md:h-[82vh] xl:h-[84vh]">
    //     <div className="flex items-center justify-between text-xl font-bold text-slate-700">
    //       <h3 className="truncate">{book?.title}</h3>
    //       {/* 버튼을 클릭하면 isEditing의 상태를 변경한다. */}
    //       <button
    //         onClick={toggleEditing}
    //         className="text-sm text-cyan-400 hover:text-cyan-600"
    //       >
    //         {isEditing ? (
    //           <ArrowPathIcon className="w-5 text-cyan-400" />
    //         ) : (
    //           <Cog8ToothIcon className="w-5 text-cyan-400" />
    //         )}
    //       </button>
    //     </div>

    //     {book?.id === 0 || isEditing ? (
    //       <div className="p-1.5">
    //         <input
    //           type="text"
    //           value={bookTitle}
    //           onChange={(evt) => setBookTitle(evt.target.value)}
    //           className="w-full rounded px-1"
    //           placeholder="타이틀..."
    //         />
    //         <button
    //           onClick={() => removeBook(book.id)}
    //           className="float-left text-rose-400 hover:text-rose-600"
    //         >
    //           Remove
    //         </button>
    //         <button
    //           onClick={changeBookTitle}
    //           className="float-right text-cyan-400 hover:text-cyan-600"
    //         >
    //           Save
    //         </button>
    //       </div>
    //     ) : book?.marks?.length ? (
    //       book?.marks.map((mark) => (
    //         <Mark key={mark.id} book={book} mark={mark} />
    //       ))
    //     ) : (
    //       <hr className="border-3 mt-0 mb-3 border-white" />
    //     )}
    //   </div>
    //   <button
    //     onClick={() => addMark(book)}
    //     className="float-right mt-2 rounded-full bg-cyan-400 px-4 py-1 font-medium text-white hover:bg-cyan-500"
    //   >
    //     + Add Mark
    //   </button>
    // </div>
    <>
      <div>그래서 여긴 Main book입니다.</div>
      <div className='h-screen box-border border-4'>책장 이름</div>
    </>
  );
};
