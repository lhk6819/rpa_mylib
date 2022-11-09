import { createContext, useContext, useReducer, useState } from 'react';

const SKEY = 'mipdata';

const SampleData = {
  books: [
    {
      id: 1,
      title: 'Favorite',
      marks: [],
    },
  ],
};
const reducer = (data, action) => {
  let newData;
  switch (action.type) {
    case 'add':
      newData = {
        ...data,
        books: [...data.books, { id: 0, title: '', marks: [] }],
      };
      break;

    case 'save':
      newData = {
        ...data,
        books: [
          ...data.books.filter((_book) => _book.id !== action.payload.id),
          action.payload,
        ],
      };
      break;

    case 'remove':
      newData = {
        ...data,
        books: [...data.books.filter((_book) => _book.id !== action.payload)],
      };
      break;

    case 'add-mark':
      newData = {
        ...data,
      };
      break;

    case 'remove-mark':
      newData = {
        ...data,
        books: [...data.books.filter((_book) => _book.id !== action.payload)],
      };
      break;

    default:
      throw new Error('Not Defined Action!!');
  }

  localStorage.setItem(SKEY, JSON.stringify(newData));
  return newData;
};

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem(SKEY)) || SampleData
  );
  const [searchStr, setSearchStr] = useState('');
  const [compleStr, setCompleStr] = useState('');

  const addBook = () => {
    dispatch({ type: 'add' });
  };
  const saveBook = (book) => {
    if (!book.id) {
      book.id = Math.max(...data.books.map((_book) => _book.id)) + 1;
    }
    dispatch({ type: 'save', payload: book });
  };
  const removeBook = (bookId) => {
    if (confirm('삭제하시겠습니까?') == true) {
      dispatch({ type: 'remove', payload: bookId });
    } else {
      return;
    }
  }; //중요!!!

  const addMark = (book) => {
    book.marks.push({ id: 0, image: '', title: '', description: '' });
    dispatch({ type: 'add-mark', payload: book });
  };

  const saveMark = (book, mark) => {
    if (!mark.id || isNaN(mark.id)) {
      const allMarks = [...data.books.map((book) => book.marks)];
      console.log('allMarks>>>>', allMarks);
      mark.id = Math.max(...allMarks.flat().map((_mark) => _mark.id)) + 1;
    }
    dispatch({ type: 'save', payload: book });
  };

  const removeMark = (book, markId) => {
    console.log('book>>>', book);
    console.log('markId>>>', markId);
    book.marks = [...book.marks.filter((mark) => mark.id !== markId)];
    if (confirm('책을 삭제하시겠습니까?') == true) {
      dispatch({ type: 'remove', payload: book });
    } else {
      return;
    }
  };
  
  return (
    <DataContext.Provider
      value={{
        data,
        addBook,
        saveBook,
        removeBook,
        addMark,
        saveMark,
        removeMark,
        searchStr,
        setSearchStr,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
