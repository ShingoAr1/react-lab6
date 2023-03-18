import React from 'react'

const Post = ({ image, content, user}) => {
  console.log(image)
  return (
    <>
    <div className='container border-2  border-emerald-600 flex p-1' >
    {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="post-cover"
          style={{ height: 100, width: 200, objectFit: "cover" }}
        className="h-5/6 w-full"
        />
      )}
      <div className='flex flex-col'>
       <p className='text-lg font-bold text-black p-2 text-start'>{content}</p>
       <div className='text-center text-black inline-block align-text-bottom'>{user}</div>
      </div>
      
    </div>
      
    </>
  )
}

export default Post