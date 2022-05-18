const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

router.post('/fibonacci',(request,response) => {
    var fibo = fibonacci_series(request.body.elements - 1);
    var res = sorted_series(fibo);
    // console.log(res);
    response.send({ fibonacci: fibo,
                    sorted: res });
});

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

var sorted_series = function (series)
{
    const even = series.filter((v) => v % 2 == 0);
    const odd = series.filter((v) => v % 2 == 1);
    const even_des = even.sort(function(a, b) {
        return a - b;
      }).reverse();
    const odd_des = odd.sort(function(a, b) {
        return a - b;
      }).reverse();
    // console.log(even_des);
    // console.log(odd_des);
    return even_des.concat(odd_des);
}

app.use("/", router);