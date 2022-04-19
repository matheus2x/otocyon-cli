import * as dotenv from "dotenv";
import * as path from "path";

const dirName = path.resolve(path.dirname(""));
const dotenvFile = path.resolve(dirName, "..", "..", ".env");

dotenv.config({ path: dotenvFile });

export const nodePort = process.env.PORT || 3333;
export const env = process.env.ENV || "dev";
