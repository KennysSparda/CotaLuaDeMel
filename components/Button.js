import {useState} from 'react'

export default function Button(props) {
  const [openPix,setOpenPix] = useState(false);

  return (
    <button className="pix-button" onClick={setOpenPix}>{props.children}</button>
  )
}