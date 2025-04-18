import Transaction from './Transaction';

function TransactionsList({ trans }) {
    return (
        <>{
            trans.map((tran, i) =>
            <Transaction tran={tran} key={tran._id} index={++i} />
        )}
        {trans.length<=0 && <tr className='text-center text-lg h-40'>
            <td colSpan={7}>You haven't any booking yet !</td>
            </tr>}
        </>
    );
}

export default TransactionsList;