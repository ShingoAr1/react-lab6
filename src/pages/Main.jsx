import React from 'react'
import CreatePost from '@/components/CreatePost'
import Header from '@/components/Header'
import PostList from '@/components/PostList'

const Main = ({ user, setUser, handleAddPost, posts}) => {
  return (
    <>
    <div className="container font-sans text-white">
    <Header user={user} setUser={setUser} />
        <CreatePost user={user} handleAddPost={handleAddPost} />
        <PostList posts={posts} />

    </div>
        
    </>
  )
}

export default Main