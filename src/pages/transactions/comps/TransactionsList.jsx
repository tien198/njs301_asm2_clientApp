import Transaction from './Transaction';

function TransactionsList({ trans }) {
    return (
        <>{trans.map((tran, i) =>
            <Transaction tran={tran} key={tran._id} index={++i} />
        )}
        </>
    );
}

export default TransactionsList;