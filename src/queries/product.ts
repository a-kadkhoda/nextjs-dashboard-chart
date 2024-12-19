import instance from "@/configs/axios"



export const getProducts = async ([endpoint]:[string])=>{
    try {
        const res =  await instance.get(endpoint)
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const getLogs = async ()=>{
    try {
        const res =  await instance.get("http://localhost:3000/api/logs")
        return res.data
    } catch (error) {
        console.log(error);
    }
}







