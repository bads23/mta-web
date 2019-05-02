import React, { useState, useEffect} from 'react'
import Input, { Select, Textarea, Checkbox } from '../../../../common/inputs/index'
import ApiGet from '../../../../config/axios'
import URLS from '../../../../config/settings'

const AddForm = () => {
  const [categories, setCategories] = useState([])
  const getCategories = () => {
    ApiGet(`${URLS().CATEGORIES}`)
      .then(res => {
        setCategories(res.data)
      })
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <div className="fl-center">
        {/* <Link to="/"><span className="lato-lg">Activity</span></Link> */}
        <span className="lato-lg b">New Product</span>
      </div>
      
      <form className="form">
        <Input label="Name" type="text" ph="Item Name" />
        <Select label="Category" options={categories} />
        <Input label="Price (Ksh)" type="number" ph="Item Price" />
        <Textarea label="Description" />
        <Checkbox label="Visibility" ph="Hide this item" />

        <div id="images_upload">
          <label className="lato-m b mg-v-10">Images:</label>

          <div className="fl-btw fl-wrap mg-v-20">
            <div className="imgContainer isImg">
              <img src="" alt="" />
            </div>
            <div className="imgContainer isImg">
              <img src="" alt="" />
            </div>
            <div className="imgContainer isNewImg">
              <label htmlFor="newImg" className="lato-m b grey"><span>Add an image</span></label>
              <input type="file" accept="image/*" name="" id="newImg" />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-black btn-full">Save</button>
      </form>
    </>
  )
}

export default AddForm