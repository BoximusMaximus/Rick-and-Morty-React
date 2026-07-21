import React from 'react'
import { Link } from "react-router"

export default function ErrorPage() {
  return (
    <>
        <h1>Page not found!</h1>
        <Link to="/">Click here to return home</Link>
    </>
  )
}
