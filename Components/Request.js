import axios from "axios";

export function storeExpense(submit) {
  axios.post(
    // (Your Firebase Address),
    submit
  );
}

export async function getExpense(){
    const response=await axios.get(
        // (Your Firebase Address),
    )
    const expenses=[]

    for (const key in response.data){
        const expobject={
        id:key,
        description:response.data[key].description,
        date:new Date(response.data[key].date),
        price:response.data[key].price
        }
        expenses.push(expobject)
    }
    return(expenses)
}

export async function removeExpense(id){
  // return await axios.delete( (Your Firebase Address),"+`expenses/${id}.json`)
}

export async function changeExpense(id,data){
  // return await axios.put( (Your Firebase Address),+`expenses/${id}.json`,data)
}
