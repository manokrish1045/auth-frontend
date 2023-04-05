// import axios from 'axios'
// import queryString from 'query-string'
import React, { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

// const baseUrl = "http://localhost:4000/api/user"

export default function Form() {
    // const locatiopn = useLocation()

    const verifyToken = async () => {
        // try {
        //     const { token, id } = queryString.parse(locatiopn.search)
        //     const { data } = await axios
        //         (`${baseUrl}/verify-token?token=${token}&id=${id}`)
        //     console.log(data)
        // } catch (error) {
        //     if (error?.response?.data) {
        //         return console.log | (data)
        //     }
        //     console.log(error)
        // }
    }
    useEffect(() => {
        verifyToken()
    }, [])
    return (
        <div className="max-w-screen-sm m-auto pt-40">
            <h1 className="text-center text-3xl text-gray-500 mb-3">Reset Password</h1>
            <form action="" className="shadow w-full-rounded-lg p-10">
                <div className="space-y-8">
                    <input
                        type="password"
                        placeholder='********'
                        className="px-3 text-lg h-10 w-full border-gray-500 border-2 rounded" />
                    <input
                        type="password"
                        placeholder='********'

                        className="px-3 text-lg h-10 w-full border-gray-500 border-2 rounded" />
                    <input
                        type="submit"
                        value="Reset Password" className="bg-gray-500 w-full py-3 text-white rounded" />
                </div>

            </form>

        </div >
    )
}
