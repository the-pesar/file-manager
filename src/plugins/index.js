const colors = require("colors");
require("dotenv").config({ path: __dirname + "/../../.env" });

colors.setTheme({ cSuccess: "green", cError: "red", cWarn: "yellow" });