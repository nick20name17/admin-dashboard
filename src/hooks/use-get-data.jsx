import axios from 'axios'
import { useEffect, useState } from 'react'

export const useGetSingleItem = ({ endpoint, id }) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    'https://api.escuelajs.co/api/v1' + endpoint + '/' + id
                )
                setData(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUsers()
    }, [])

    return { data, error, loading: isLoading }
}

export const useGetData = ({ endpoint, queryParamsObject }) => {
    const queryParams = new URLSearchParams(queryParamsObject)?.toString()

    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    'https://api.escuelajs.co/api/v1' + endpoint + '?' + queryParams
                )
                setCount(response.headers['content-length'])
                setData(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [
        queryParamsObject?.offset,
        queryParamsObject?.limit,
        queryParamsObject?.title,
        queryParamsObject?.categoryId,
        queryParamsObject?.price_min,
        queryParamsObject?.price_max
    ])

    return { data, error, loading, count }
}
