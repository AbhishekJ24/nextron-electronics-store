import React from 'react'

function ImageBannerLarge({img_url,img_alt_text}) {
  return (
    <>
     <img src={img_url} alt={img_alt_text} className="w-screen" /> 
    </>
  )
}

export default ImageBannerLarge
