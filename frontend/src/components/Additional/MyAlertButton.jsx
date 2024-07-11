import React from 'react'
import { Alert } from '@mui/material'

function MyAlertButton({ text = "" }) {
  return (
    <Alert className="fixed bottom-4 right-4 z-50" severity="success">{text}</Alert>
  )
}

export default MyAlertButton