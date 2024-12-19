import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";
import { JsonFile } from "@/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const currentPath = path.resolve("public/logs.json");

  if (req.method === "POST") {
    try {
      const { body } = req;


      if (!body.endpoint || !body.url || !body.date) {
        return res.status(400).json({ message: "Invalid request body" });
      }

      const data = {
        endpoint: body.endpoint,
        url: body.url,
        date: body.date,
      };


      try {
        await fs.access(currentPath);
      } catch {

        await fs.writeFile(currentPath, "[]", "utf-8");
      }


      const fileContent = await fs.readFile(currentPath, "utf-8");
      const logs: JsonFile = fileContent.trim() ? JSON.parse(fileContent) : [];


      logs.push(data);


      await fs.writeFile(currentPath, JSON.stringify(logs, null, 2), "utf-8");

      return res.status(200).json({ message: "Log added successfully" });
    } catch (error) {
      console.error("Error handling log request:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "GET") {
    try {

      try {
        await fs.access(currentPath);
      } catch {

        await fs.writeFile(currentPath, "[]", "utf-8");
      }


      const fileContent = await fs.readFile(currentPath, "utf-8");
      const logs: JsonFile = fileContent.trim() ? JSON.parse(fileContent) : [];

      return res.status(200).json(logs);
    } catch (error) {
      console.error("Error handling GET request:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {

    res.setHeader("Allow", ["POST", "GET"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default handler;
