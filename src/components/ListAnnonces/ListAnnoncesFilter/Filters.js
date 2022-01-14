const searchFilter = function (e,preFiltered){
    const res = []
    preFiltered.forEach((v)=>{
        if( !e  || (v.titre.toUpperCase().indexOf(e.toUpperCase()) !== -1)){
            res.push(v)
        }
    })
    console.log('search : ',res)
    return res
}
const minFilter = function (e,preFiltered){
    const res = []
    preFiltered.forEach((v)=>{
        if( !e ||  v.prix >= e){
            res.push(v)
        }
    })
   return res
}
const maxFilter = function (e,preFiltered){
    const res = []
    preFiltered.forEach((v)=>{
        if( !e || v.prix <= e ){
            res.push(v)
        }
    })
    return res
}
const cityFilter = function (e,preFiltered){
    const res = []
    if(!e) return preFiltered
    preFiltered.forEach((v)=>{
        let current = e.length === 0 ? true :  false
        
        e.forEach( c => {
            if(c.value === v.location.ville){
                current = true
            }
        })
        if(current) res.push(v)
    })
    return res
}
const typeFilter =  function(e,preFiltered){
    const res = []
    preFiltered.forEach((v)=>{
        if( !e || v.typeAnnonce === e ){
            res.push(v)
        }
    })
    return res
}
export  {cityFilter,searchFilter,minFilter,maxFilter,typeFilter}