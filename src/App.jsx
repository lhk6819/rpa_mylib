import { Book } from './components/Book';
import { Nav } from './components/Nav';
import { useData } from './hooks/data-context';

function App() {
  const { data, addBook } = useData();

  return (
    <div className='bg-gray-300 h-screen w-full overflow-y-hidden overflow-x-scroll scroll-smooth'>
      <header className='fixed top-0 left-0'>
        <Nav />
      </header>
      <main className='mt-14'>
        <div className='flex items-start p-4'>
          {data.books
            .sort((a, b) =>
              a.id === 0 ? Number.MAX_SAFE_INTEGER : a.id - b.id
            )
            .map((book) => (
              <Book key={book.id} book={book} />
            ))}
          <div>
            {data.books.find((book) => !book.id) ? (
              ''
            ) : (
              <button
                onClick={addBook}
                className='mr-2 w-64 h-[42px] rounded-sm bg-gray-500 px-5 py-1 font-bold text-white hover:bg-orange-500'
              >
                + Add Bookcage
              </button>
            )}
          </div>
        </div>
      </main>

      <footer className='text-center fixed right-4 bottom-6 text-slate-500'>
        Copyright Project Fire 2022
      </footer>
    </div>
  );
}

export default App;
