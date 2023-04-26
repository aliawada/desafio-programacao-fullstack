import Navbar from '@/components/navbar'
import Head from 'next/head'
import React, { SyntheticEvent, useState } from "react"
import axios from "axios"

export default function Upload() {
    const [file, setFile] = useState("")
    const [isUploading, setIsUploading] = useState<boolean>(false)

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault()
        setIsUploading(true)

        const formData = new FormData()
        formData.append("file", file)

        try {
            await axios.post('api/upload', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
        } catch (error) {
            console.error('There was an error uploading the file', error)
        } finally {
            setIsUploading(false)
        }
    }

    const handleFileSelect = (event: any) => {
        setFile(event.target.files[0])
    }


    return (
        <>
            <Head>
                <title>Upload</title>
                <meta name="description" content="Upload" />
            </Head>
            <Navbar />
            <main>
                <section className="bg-white border rounded shadow-lg mb-10">
                    <div className="border-b p-3">
                        <h5 className="font-bold uppercase text-gray-600">File</h5>
                    </div>
                    <div className="flex flex-row items-center p-3">
                        <form onSubmit={handleSubmit} className="mr-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                            <input className="mb-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" name="csv" onChange={handleFileSelect} />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Text file only.</p>
                            <button className="border p-2" type="submit">Upload</button>
                        </form>
                        {isUploading && (
                            <div className="pl-4">
                                uploading
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    )
}
