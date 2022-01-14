import { useEffect , useMemo, useState } from 'react'
import Select from 'react-select'
import {cityFilter,searchFilter,minFilter,maxFilter,typeFilter} from './Filters'

export default function ListAnnonceFilter(props) {
    const [villes , setVilles] = useState([])
    const [filters , setFilters] = useState({search : null , min : null , max : null , cities : null , typeAnnonce  : null })
    // Fetch for Morocco Cities
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/mehdibo/morocco-cities/master/cities.json").then(response=>{
           response.json().then(value=>{
            const res = value.cities.data.map((v,k)=>{
                    return { value : v.names.fr , label : v.names.fr}
                })
                setVilles(res)
            })
        })
    },[])

    

    
    const updateFilters = (key,value)=>{
        const up = filters
        up[key] = value
        setFilters(up)
        let res = searchFilter(filters.search,props.posts)
        res = minFilter(filters.min,res)
        res = maxFilter(filters.max,res)
        res = cityFilter(filters.cities,res)
        res = typeFilter(filters.typeAnnonce,res)
        props.updatePosts(res)
    }

    return (
        <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
            <div className="sidebar-widget search  mb-3 ">
                <h5>Search Here</h5>
                <form action="#" className="search-form">
                    <input type="text" className="form-control" placeholder="search" onChange={(e)=>updateFilters('search',e.target.value)}/>
                    <i className="ti-search"></i>
                </form>
            </div>
            <div className="sidebar-widget  mb-3">
                <h5>Filtrer par Location</h5>
                <Select
                    options={villes}
                    isMulti
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e)=>updateFilters('cities',e)}
                ></Select>
            </div>
            <div className=" sidebar-widget  mb-3">
                <h5>Filtrer par Prix</h5>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input name="min" id="min" type="number" className="form-control" placeholder="Minimum" onChange={(e)=>updateFilters('min',e.target.value)} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input name="Max" id="max" type="number" className="form-control" placeholder="Maximum" onChange={(e)=>updateFilters('max',e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>


            {/*
            <div className="sidebar-widget tags mb-3">
                <h5 className="mb-4">Type d'immobilier</h5>

                <a onClick={()=>updateFilters('typeAnnonce','Villa')}>Villa</a>
                <a onClick={()=>updateFilters('typeAnnonce','Maison')}>Maison</a>
                <a onClick={()=>updateFilters('typeAnnonce','Appartement')}>Appartement</a>
               
            </div>
            */}



        </div>
    )
}