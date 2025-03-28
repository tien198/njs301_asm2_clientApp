
import Type from './Type';

function TypesBrowse({ types }) {
    return (
        <div className='flex flex-col gap-7'>
            <h4 className='font-extrabold text-2xl'>Browse by property type</h4>
            <div className='grid grid-cols-3 lg:grid-cols-5 gap-4'>
                {/* items */}
                {
                    types.map(t => {
                        return <Type type={t} key={t.name} />
                    })
                }
            </div>
        </div>
    )
}

export default TypesBrowse;
