import express from "express";

const app = express();
const port = 3000;
app.use(express.static( 'public'));
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
let date = d.getDate();
let month = d.getMonth()
let year = d.getFullYear()
app.get("/",(req,res)=>{
  res.render("index.ejs",{
        Day : day,
        date  : date,
        month : month,
        year : year
  });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  