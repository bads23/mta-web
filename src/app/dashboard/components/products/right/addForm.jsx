import React, { useState, useEffect } from 'react'
import Input, { Select, Textarea, Checkbox } from '../../../../common/inputs/index'
import ApiGet, { ApiPost } from '../../../../config/axios'
import URLS from '../../../../config/settings'

const AddForm = ({ props }) => {
  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const [productClass, setProductClass] = useState([])
  const [product, setProduct] = useState({})

  const getCategories = () => {
    ApiGet(`${URLS().CATEGORIES}`)
      .then(res => {
        setCategories(res.data)
      })
  }

  const getSubCategories = () => {
    ApiGet(`${URLS().SUBCATEGORIES}`)
      .then(res =>{
        setSubCategories(res.data)
      })
  }

  const getProductClass = () => {
    ApiGet(`${URLS().PRODUCTCLASS}`)
      .then(res =>{
        setProductClass(res.data)
      })
  }

  useEffect(() => {
    getCategories()
  }, [])

  const handleName = (e) => {
    var np = { ...product }
    np.name = e.target.value
    setProduct(np)
    console.log(e.target.value)
  }

  const handleCategory = (e) => {
    var np = { ...product }
    np.category = e.target.value
    getSubCategories()
    setProduct(np)
  }

  const handleSubCategory = (e) =>{
    var np = { ...product }
    np.subcategory = e.target.value
    getProductClass()
    setProduct(np)
  }

  const handleClass = (e) =>{
    var np = { ...product }
    np.productclass = e.target.value
    setProduct(np)
  }

  const handlePrice = (e) => {
    var np = { ...product }
    np.price = e.target.value
    setProduct(np)
  }

  const handleDescription = (e) => {
    var np = { ...product }
    np.description = e.target.value
    setProduct(np)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(product)
    ApiPost(`${URLS().CATALOG}`, { ...product })
      .then(res => {
        console.log(res.data)
      })
  }

  return (
    <>
      <div className="fl-center">
        {/* <Link to="/"><span className="lato-lg">Activity</span></Link> */}
        <span className="lato-lg b">New Product</span>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <Input label="Name" type="text" ph="Item Name" value={product.name} onChange={handleName} />
        <Select label="Category" options={categories} value={product.category} onChange={handleCategory} />
        <Select label="SubCategory" options={subCategories} value={product.subcategory} onChange={handleSubCategory} />
        <Select label="Class" options={productClass} value={product.productClass} onChange={handleClass} />
        <Input label="Price (Ksh)" type="number" ph="Item Price" value={product.price} onChange={handlePrice} />
        <Textarea label="Description" value={product.description} onChange={handleDescription} />
        <Checkbox label="Visibility" ph="Hide this item" />

        {/* <div id="images_upload">
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
        </div> */}

        <button type="submit" className="btn btn-black btn-full">Save</button>
      </form>
    </>
  )
}

export default AddForm