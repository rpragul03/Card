
const initialstate={
   products:[]
}

export const setproductsreducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case "SETPRODUCTS": {
      return {...state,products:payload}
    }
    default: {
      return state;
    }
  }
};

export const getproductfromreducer=(state={},{type,payload})=>{
  switch(type){
    case "GETPRODUCTS":{
return {...state,products:payload};
    }
    case "REMOVEPRODUCTS" :{
      return {}
    }
    default :{
      return state;
    }
  }
}





// export default setproductsreducer;
// export default getproductfromreducer;
