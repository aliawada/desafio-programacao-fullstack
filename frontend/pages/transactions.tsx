import Navbar from '@/components/navbar'
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

type Transaction = {
    type: number
    date: Date
    product: string
    value: number
    seller: string
}

export default function Transactions({ transactions }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <>
            <Head>
                <title>Transactions</title>
                <meta name="description" content="Transactions" />
            </Head>
            <Navbar />
            <main>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Value
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Seller
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction: Transaction, id: number) => {
                                const data = new Date(transaction.date);
                                const formatoData = data.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'medium' }).replace(/^(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2})/, '$1/$2/$3 $4:$5');
                                return (
                                    <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {transaction.type}
                                        </th>
                                        <td className="px-6 py-4">
                                            {formatoData}
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {transaction.product}
                                        </th>
                                        <td className="px-6 py-4">
                                            R$ {transaction.value / 100}
                                        </td>
                                        <td className="px-6 py-4">
                                            {transaction.seller}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/transaction`)
    const transactions: Transaction[] = await res.json()

    return {
        props: {
            transactions,
        },
    }
}