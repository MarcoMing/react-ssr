
import express from "express"
import path from "path"
import cors from "cors"
import { matchPath, StaticRouter } from "react-router-dom";

const port = 8001;
const page = require('../dist/page.generator.js').page.default;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '..', './dist')));


import 'ignore-styles';
import { routes } from '../src/routes';


app.get("*", (req, res, next) => {

  const pathUrl = req.path;
  console.log('req.path',req.path)

  const activeRoute = routes.find(
    (route) => matchPath(pathUrl, route)
  ) || {}


  if(!activeRoute.path) res.end('404 not found');

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

  promise.then((data)=>{

    //console.log('data',data && data.data);
    const props = {
      home: {
        count: 10,
        dataSource: data && data.data
      }
    };
    const html = page(pathUrl,props);
    res.end(html);
  })

})

app.listen(port, function() {
  console.log('Listening on port %d', port);
});
