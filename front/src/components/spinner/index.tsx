import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

interface Props {}

const Spinner: React.FC<Props> = (props) => {
    return  <ClipLoader size={150} />
}

export default Spinner
