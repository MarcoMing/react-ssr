
import express from "express"
import path from "path"
import cors from "cors"

const port = 8001;
const page = require('../dist/page.generator.js').page.default;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '..', './dist')));


app.get("*", (req, res, next) => {

  page(req, res, next);

})

app.listen(port, function() {
  console.log('Listening on port %d', port);
});
