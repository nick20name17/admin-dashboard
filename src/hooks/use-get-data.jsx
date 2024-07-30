import axios from 'axios'
import React from 'react'

export const useGetSingleItem = ({ endpoint, id }) => {
    const [data, setData] = React.useState([])
    const [error, setError] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
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

    const [data, setData] = React.useState([])
    const [error, setError] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    'https://api.escuelajs.co/api/v1' + endpoint + '?' + queryParams
                )
                setData(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUsers()
    }, [queryParamsObject])

    return { data, error, loading: isLoading }
}
