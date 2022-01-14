const typeImmobles = [
    { label: 'VILLA', value: 'VILLA' },
    { label: 'APPARTEMENT', value: 'APPARTEMENT' },
    { label: 'MAISON', value: 'MAISON' }
]
const operations = [
    { label: 'VENTE', value: 'VENTE' },
    { label: 'LOCATION', value: 'LOCATION' },
]
const roles = ['ADMIN','UTILISATEUR','CLIENT']
const getImmoblesByIndex = (index)=>{
    if(index) return typeImmobles[index].value
}
const getImmobleIndex =  (value)=>{
    for(let i = 0 ; i <  typeImmobles.length ; i++){
        if(value === typeImmobles[i].label) return i
    }
}
const getOperationIndex =  (value)=>{
    for(let i = 0 ; i <  operations.length ; i++){
        if(value === operations[i].label) return i
    }
}
const getOperationsByIndex = (index)=>{
    if(index) return typeImmobles[index].value
}

export {typeImmobles,operations,roles,getOperationIndex,getImmobleIndex,getImmoblesByIndex,getOperationsByIndex}