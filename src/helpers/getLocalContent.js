const fs = require("fs");
const path = require("path");
const { createClient } = require("contentful");
require("dotenv").config();

const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
});

const types = ["socialItem"];

const getLocalContent = async () => {
  for (const type of types) {
    console.log(`> Getting content type ${type}`);
    const entries = await client.getEntries({
      content_type: type,
    });

    if (entries) {
      var formattedItems = entries.items.map((item, index) => {
        return { ...item.fields };
      });
      fs.writeFileSync(path.join(__dirname, "..", "data", `${type}s.json`), JSON.stringify(formattedItems));
    }
  }
  return true;
};

getLocalContent();
