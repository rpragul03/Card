export const getProducts=(data)=>{
    return{
        type:"GETPRODUCTS",
        payload:data
    }
}

export const setProducts=(data)=>{
    return{
        type:"SETPRODUCTS",
        payload:data
    }
}

export const removeProducts=()=>{
    return{
        type:"REMOVEPRODUCTS"
    }
}