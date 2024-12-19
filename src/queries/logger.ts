import instance from "@/configs/axios"

export const logMaker = async(body:object)=>{
    try {
        const res = await instance.post("http://localhost:3000/api/logger",body)
        return res.data
    } catch (error) {
        console.log(error);
    }

}