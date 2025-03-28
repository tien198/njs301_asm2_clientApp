// Data to display
import dataSearched from '../../../data/search.json';

import SearchedItem from './comps/SearchedItem'
import SearchToolSidebar from './comps/SearchToolSidebar'

function Search() {
  
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 container mx-auto mt-6'>
        <div>
          <SearchToolSidebar />
        </div>
        {/* responsive lg:col-start-2 lg:col-end-5 */}
        <div className='lg:col-start-2 lg:col-end-5 flex flex-col gap-3'>
          {
            dataSearched.map(data => {
              return <SearchedItem item={data} key={data.image_url} />
            })
          }
        </div>
      </div>
    </>
  );
}

export default Search;

