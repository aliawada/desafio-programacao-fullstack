import Navbar from '@/components/navbar'
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

type Transaction = {
  type: number
  value: number
  seller: string
}

interface Result {
  [name: string]: number;
}

export default function Creators({ result }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <>
      <Head>
        <title>Creators</title>
        <meta name="description" content="Creators" />
      </Head>
      <Navbar />
      <main>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Creators
                </th>
                <th scope="col" className="px-6 py-3">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(result).map((name, id) => {
                return (
                  <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">
                      {name}
                    </td>
                    <td className="px-6 py-4">
                      R$ {result[name] / 100}
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

  const result: Result = transactions.reduce((accumulator: Result, currentValue: Transaction) => {
    const { seller, value } = currentValue;
    if (currentValue.type === 1) {
      accumulator[seller] = (accumulator[seller] || 0) + value;
    } else if (currentValue.type === 3) {
      accumulator[seller] = (accumulator[seller] || 0) - value;
    }
    return accumulator;
  }, {});

  return {
    props: {
      result,
    },
  }
}
