import fs from "fs";
import path from "path";

function getProjectsData() {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonData);
}

export default getProjectsData;
