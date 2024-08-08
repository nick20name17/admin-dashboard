import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components/app'
import './global.css'
import { TableViewProvider } from './providers/table-view-provider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TableViewProvider>
        <App />
    </TableViewProvider>
)
