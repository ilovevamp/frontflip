const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
    const { accesskey } = req.query;
    if (!accesskey) {
        return res.status(400).send("No access key provided");
    }

    const keysFilePath = path.join(process.cwd(), "keys.txt");
    const keys = fs.readFileSync(keysFilePath, "utf8").split("\n").map(k => k.trim());

    if (keys.includes(accesskey)) {
        return res.send("Working");
    } else {
        return res.send("Invalid key");
    }
}
