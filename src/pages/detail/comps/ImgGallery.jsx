
export default function ImgGallery({ item }) {
    return (
        <div className='grid grid-cols-3 gap-1 my-4'>
            {
                item.photos.map(p => {
                    return <img src={p} alt={item.name} key={p} />
                })
            }
        </div>
    )
}