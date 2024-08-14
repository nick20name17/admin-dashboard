import { Input } from 'antd'

export const SearchBar = ({ search, setSearch }) => {
    return (
        <Input
            className='mt-10'
            onChange={(e) => setSearch(e.target.value)}
            defaultValue={search}
            placeholder='Search...'
        />
    )
}
