import React, {useState, useEffect} from 'react'
import Input, {Editor} from '../../../common/inputs'
import ApiGet, { ApiPut } from '../../../config/axios'
import URLS from '../../../config/settings'

const Edit = ({props}) => {
    
    const [post, setPost] = useState([])

    const handleTitle = (e) => {
        var np = {...post}
        np.Title = e.target.value
        setPost(np)
    }

    const handleSubtitle = (e) =>{
        var np = {...post}
        np.Subtitle = e.target.value
        setPost(np)
    }

    const handleArticle = (e) => {
        var np = {...post}
        np.Content = e.editor.getData()
        setPost(np)
    }

    const handleCover = (e) => {
        var np = {...post}
        np.Cover_Image = e.target.value
        setPost(np)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        e.stopPropagation()

        ApiPut(`${URLS().NEWS}${props.match.params.id}/`, post)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const getItem = (id) => {
        ApiGet(`${URLS().NEWS}${id}/`)
        .then(res =>(
            setPost(res.data)
        ))
    }

    useEffect(() => {
       getItem(props.match.params.id)
    },[])

    return (
        <>
            <div className="midsection_full">
                <h2 className="playfair-lg">Edit Post</h2>

                <form onSubmit={handleSubmit} className="mg-v-20">
                    <Input type="text" label="Title" onChange={handleTitle} value={post.Title} />
                    <Input type="Text" label="Subtitle" onChange={handleSubtitle} value={post.Subtitle} />
                    <Editor label="Article" value={post.Content} onChange={handleArticle} />
                    <Input type="text" label="Cover Image" onChange={handleCover} value={post.Cover_Image}/>
                    <button className="btn btn-black">Save</button>
                </form>
            </div>
        </>
    )
}

export default Edit 