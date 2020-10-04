import React, { useState, useEffect } from 'react'
import Api from '../../config/api'
import {Product} from './categoriesComponent'
import { Select } from '../../common/inputs/index'
import Loader from '../../common/loader'

const Categories = ({ category }) => {

  const paramItems = {
    subcategory: '',
    productclass: ''
  }

  const [subCategory, setSubCategory] = useState([])
  const [subClass, setSubClass] = useState([])
  const [products, setProducts] = useState([])
  const [params, setParams] = useState(paramItems)

  const getProducts = (id) => {
    Api.catalog.get(`?category=${id}`)
    .then(res => {
      setProducts(res.data)
    })
  }

  const getItems = () => {
    Api.subcategories.get(`?category=${category.id}`)
    .then(res => {
      setSubCategory(res.data)
    })
  }

  useEffect(() => {
    getItems()
    getProducts(category.id)
  }, [])

  const getClasses = (sub_id) => {
    Api.productclass.get(`?subcategory=${sub_id}`)
    .then(res => {
      setSubClass(res.data)
    })
  }

  const handleSubcategory = (e) => {
    getClasses(e.target.value)
    var par = { ...params }
    par.subcategory = e.target.value
    setParams(par)
  }

  const handleClass = (e) => {
    var par = { ...params }
    par.productclass = e.target.value
    setParams(par)
  }

  const handleFilter = () => {
    params.subcategory === '' || params.subcategory === 'All' ? (
      Api.catalog.get(`?category=${category.id}`)
      .then(res => {
        setProducts(res.data)
      })
    ) : (
      Api.catalog.get(`?subcategory=${params.subcategory}&productclass=${params.productclass}`)
      .then(res => {
        setProducts(res.data)
      })
    )
  }


  return (
    <div className="mg-b-50" >
      <h2 className="section-header">{category.name}</h2>
      <div className="mg-50-auto fl-btw pd-20" id="filter-section">
        <div className="fl-btw fl-wrap">
          <span className="filterdivs">
            <Select label="Sub Categories" options={subCategory} onChange={handleSubcategory} pholder="All" />
          </span>

          <span className="filterdivs">
            <Select label="Class" options={subClass} onChange={handleClass} />
          </span>
        </div>

        <div className="relative">
          <span className="absolute v-h-center" id="filterBtnDiv">
            <button className="btn btn-black" onClick={handleFilter}>Filter</button>
          </span>
        </div>
      </div>
      <h2 className="playfair-lg align-center">Results - {products.length} Items</h2>
      <div className="fl-btw fl-wrap pr-wrap mg-0-auto">
        {
          products.length > 0 ? (
            products.map(item => (
              <Product item={item} key={item.id} />
            ))
          ) : (
              <Loader />
            )
        }
      </div>
    </div>
  )
}

export default Categories