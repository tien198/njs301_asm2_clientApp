// Data to display
import { useSelector } from 'react-redux';
import store from '../../store'

// import results from '../../../data/search.json';

import SearchedItem from './comps/SearchedItem'
import SearchSidebarForm from './comps/SearchSidebarForm'
import BackendUri from '../../utilities/enums/backendUri';
import { setSearched } from '../../store/slices/searchedHotels';
import { setModalInfors, showModal } from '../../store/slices/modalSlice';

function Search() {
  const results = useSelector(({ searchedHotels }) => searchedHotels.results)

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 container mx-auto mt-6'>
        <div>
          <SearchSidebarForm />
        </div>
        {/* responsive lg:col-start-2 lg:col-end-5 */}
        <div className='lg:col-start-2 lg:col-end-5 flex flex-col gap-3'>
          {results
            ? results.map(data => {
              return <SearchedItem item={data} key={data._id} />
            })
            : <span>There aren't hotel that match your requirement !</span>
          }
        </div>
      </div>
    </>
  );
}

export default Search;

export async function search(args) {
  const { request } = args
  const formData = Object.fromEntries((await request.formData()).entries())

  const searched = await fetch(BackendUri.searchHotels, {
    headers: {
      'content-type': 'application/json'
    },
    method: request.method,
    body: JSON.stringify(formData)
  })
  try {
    const results = await searched.json()
    console.log(`searched total: ${results.total} hotels`);
    if (results.total > 0)
      store.dispatch(setSearched(results))
    else {
      store.dispatch(setModalInfors({
        status: 404,
        message: `There aren't hotel that match your requirement !`
      }))
      store.dispatch(showModal())

    }

  }
  catch (err) {
    console.error(err)
  }
  return null
}