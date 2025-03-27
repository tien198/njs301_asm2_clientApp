import footerData from '../../../data/footer.json';

function Footer() {
    return (
        <div className='grid grid-cols-3 lg:grid-cols-5 gap-12 pt-14 pb-12 container m-auto text-main-color px-5 md:px-7'>
            <FooterCols data={footerData} />
        </div>
    );
}

export default Footer;

function FooterCols({ data }) {
    return (
        <>
            {
                data.map(e => {
                    return <Col colData={e.col_values} key={e.col_number} />
                })
            }
        </>
    )
}

function Col({ colData }) {
    return (
        <div className='flex flex-col gap-1'>
            {
                colData.map(e => {
                    return <p key={e}>{e}</p>
                })
            }
        </div>
    )
}