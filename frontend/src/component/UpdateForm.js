import React from 'react'
import { useState } from 'react'
import APIService from './APIServices'

function UpdateForm({ editedArticle, updateData }) {
    const [title, setTitle] = useState(editedArticle.title)
    const [body, setBody] = useState(editedArticle.body)
    const updateArticle = () => {
        APIService.UpdateArticle(editedArticle.id, { title, body })
            .then(resp => updateData(resp))
            .catch(error => console.log(error))
    }
    return (
        <div>
            {
                editedArticle ? (
                    <div className="mb-3">
                        <label htmlform="title" className='form-label'>Title</label>
                        <input type="text" className='form-control' value={title} placeholder="please enter title" onChange={(e) => setTitle(e.target.value)} />
                        <label htmlform="body" className='form-label'>Article</label>
                        <textarea className='form-control' value={body} placeholder="please enter article" onChange={(e) => setBody(e.target.value)} />
                        <button className='btn btn-success mt-3' onClick={updateArticle}>Update</button>
                    </div>
                ) : null
            }
        </div>
    )
}

export default UpdateForm