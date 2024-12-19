import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs"
import path from "path";
import moment from "moment";


const Handler = async(req:NextApiRequest,res:NextApiResponse) =>{
    const currentPath = path.resolve("public/logs.json")
    if(req.method === "GET"){
        const data = fs.readFileSync(currentPath);
        const logs = JSON.parse(data.toString());
        let last7Days = [];
        for (let i = 0; i < 7; i++) {
            last7Days.push(moment().subtract(i, "days").format("MM/DD/YYYY"));
        }
        const filteredLogs = logs.filter((log: { date: string }) =>
            last7Days.includes(moment(log.date).format("MM/DD/YYYY"))
        );
        const logCountByDate = last7Days.reduce((acc: { [key: string]: number }, date) => {
            acc[date] = filteredLogs.filter((log: { date: string }) => 
            moment(log.date).format("MM/DD/YYYY") === date
            ).length;
            return acc;
        }, {});

        res.status(200).json(logCountByDate);
        
        
    }



}


export default Handler