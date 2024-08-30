import { useEffect, useState } from 'react'

import { api } from '../api/api'

export const useGetSingleItem = ({ endpoint, id }) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(endpoint + '/' + id)
                setData(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
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
        const fetchData = async () => {
            try {
                const response = await api.get(endpoint + '?' + queryParams)
                setCount(response.headers['content-length'])
                setData(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
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
