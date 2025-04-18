import { Suspense } from "react";
import { Await, redirect, useLoaderData } from "react-router-dom";

import appStore from '../../store'

import { getJwtToken } from '../../utilities/localStorageUtils/authenToken'
import BackendUri from '../../utilities/enums/backendUri'
import Fallback from "../../components/Fallback";
import TransactionsList from "./comps/TransactionsList";
import ClientAppUri from "../../utilities/enums/clientAppUri";


export default function Transactions() {
    const deferLoader = useLoaderData()

    return (
        <div className="p-6 bg-white">
            <h2 className="text-xl font-bold mb-4">Your Transactions</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-cyan-600 text-white">
                        <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2 text-left">Hotel</th>
                            <th className="px-4 py-2">Room</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Payment Method</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Suspense fallback={<Fallback />}>
                            <Await resolve={deferLoader}>{trans =>
                                <TransactionsList trans={trans} />
                            }
                            </Await>
                        </Suspense>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export async function loader() {
    try {
        const { authen } = appStore.getState()
        const userId = authen.userInfor.userId
        const reqBody = { userId }

        const res = await fetch(BackendUri.getTransactions, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'authorization': getJwtToken()
            },
            body: JSON.stringify(reqBody)
        })
        if (res.ok)
            return res.json()
        else {
            const error = await res.json()
            alert(error.message)

            if (error.status === 401) {
                alert(error.message)
                return redirect(ClientAppUri.AuthenURI_Absolute.login)
            }
            return res.json()
        }

    } catch (err) {
        console.error(err)
    }
}