import React, { useState, useEffect } from 'react'
import Input, { Select, Textarea, Checkbox } from '../../../../common/inputs/index'
import ApiGet, { ApiPut, ApiPost, ApiDelete } from '../../../../config/axios'
import URLS from '../../../../config/settings'
// import { NOTIMP } from 'dns';
import { ShowNotify } from '../../../../common/popups'

const EditForm = ({ props }) => {
  const [categories, setCategories] = useState([])
  const [subcategories, setSubCategories] = useState([])
  const [productclasses, setProductClasses] = useState([])
  const [product, setProduct] = useState({})
  const [image, setImage] = useState([])

  const getCategories = () => {
    ApiGet(`${URLS().CATEGORIES}`)
      .then(res => {
        setCategories(res.data)
      })
  }

  const getSubCategories = (id) => {
    id ? (
      ApiGet(`${URLS().SUBCATEGORIES}?category=${id}`)
        .then(res => {
          setSubCategories(res.data)
        })
    ) : (
        ApiGet(`${URLS().SUBCATEGORIES}`)
          .then(res => {
            setSubCategories(res.data)
          })
      )
  }

  const getProductclasses = (id) => {
    id ? (
      ApiGet(`${URLS().PRODUCTCLASS}?subcategory=${id}`)
        .then(res => {
          setProductClasses(res.data)
        })
    ) : (
        ApiGet(`${URLS().PRODUCTCLASS}`)
          .then(res => {
            setProductClasses(res.data)
          })
      )
  }

  const getProduct = (id) => {
    ApiGet(`${URLS().CATALOG}${id}/`)
      .then(res => (
        setProduct(res.data)
      ))
  }

  const getImages = (id) => {
    ApiGet(`${URLS().IMAGES}products/${id}/`)
    .then(res => (
      setImage(res.data)
    ))
  }


  useEffect(() => {
    getCategories()
    getSubCategories()
    getProductclasses()
    getProduct(props.match.params.id)
    getImages(props.match.params.id)
  }, [])

  const handleName = (e) => {
    var np = { ...product }
    np.name = e.target.value
    setProduct(np)
    
  }

  const handleCategory = (e) => {
    var np = { ...product }
    np.category = e.target.value
    setProduct(np)

    getSubCategories(e.target.value)
  }

  const handleSubCategory = (e) => {
    var np = { ...product }
    np.subcategory = e.target.value
    setProduct(np)

    getProductclasses(e.target.value)
  }

  const handleClass = (e) => {
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

  const handleImage = (e) => {
    var np = []
    np = [...e.target.files]
    setImage(np)
    console.log(image)
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    var imgUrl;

    reader.onload = (e) => {
      imgUrl = e.target.result
    }

    var imgWrap = document.getElementById('itemImgs')
    var newImgWrap = document.createElement("div")
    var newImg = document.createElement("img")
  
    newImg.setAttribute("src", imgUrl)
    newImg.setAttribute("alt", "uploading...")
    newImgWrap.classList.add("imgContainer")
    newImgWrap.classList.add("isImg")
    newImgWrap.appendChild(newImg)
    imgWrap.prepend(newImgWrap)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    var btn = document.getElementById('editBtn')
    btn.innerText = 'Saving...'
    ApiPut(`${URLS().CATALOG}${props.match.params.id}/`, { ...product })
      .then(res => {
        btn.innerText = "Saved!"
        ShowNotify(`<b>${res.data.name}</b> was edited!`)
        setProduct(res.data)
        // setTimeout(() => {
        //   window.location.reload()
        // }, 1000)
      })

    if (image.length > 0) {
      var payload = new FormData()
      payload.append('catalog', props.match.params.id)
      payload.append('path', image[0])

      ApiPost(`${URLS().IMAGES}`, payload)
        .then(res => {
          console.log(res.data)
        })
    }
  }

  const thanosSnap = (e) => {
    e.preventDefault()

    ApiDelete(`${URLS().CATALOG}${props.match.params.id}`)
      .then(res => {
        console.log(res.data)
        ShowNotify(`Item has been deleted!`)
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      })
  }


  return (
    product.name ? (
      <>
        <div className="fl-center">
          {/* <Link to="/"><span className="lato-lg">Activity</span></Link> */}
          <span className="lato-lg b">Edit Product</span>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <Input label="Name" type="text" ph="Item Name" value={product.name} onChange={handleName} />
          <Select label="Category" options={categories} value={product.category} onChange={handleCategory} />
          <Select label="Sub Category" options={subcategories} value={product.subcategory} onChange={handleSubCategory} />
          <Select label="Class" options={productclasses} value={product.productclass} onChange={handleClass} />
          <Input label="Price (Ksh)" type="number" ph="Item Price" value={product.price} onChange={handlePrice} />
          <Textarea label="Description" value={product.description} onChange={handleDescription} />
          <Checkbox label="Visibility" ph="Hide this item" />

          <div id="images_upload">
            <label className="lato-m b mg-v-10">Images:</label>

            <div className="fl-btw fl-wrap mg-v-20" id="itemImgs">
              {
                product.images ?
                  (
                    product.images.map(img => (
                      <div className="imgContainer isImg">
                        <img src={img.path} alt="" />
                      </div>
                    ))
                  )
                  :
                  (
                    <></>
                  )
              }
              <div className="imgContainer isNewImg">
                <label htmlFor="newImg" className="lato-m b grey"><span>Add an image</span></label>
                <input type="file" accept="image/*" name="image" id="newImg" onChange={handleImage} />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-black btn-full" id="editBtn">Save</button>
          <div id="ThanosDiv" className="mg-v-20">
            <span className="lato-xsm i">Use this button to permanently delete this item. This Action is irreversible!</span>
            <button type="button" className="btn btn-red btn-full" id="thanosBtn" onClick={thanosSnap}>Delete This Item</button>
          </div>
        </form>



      </>
    ) : (
        <>
          <i className="fas fa-circle-notch"></i>
        </>
      )
  )
}

export default EditForm