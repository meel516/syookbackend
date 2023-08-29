require('dotenv').config()
let mongoose = require('mongoose')
let timeSeriesSchema=require('./model/TimeSeries')
mongoose.connect('mongodb+srv://mdsaleem516:a4dtNSbNPV1KOFHh@cluster0.npkfbjc.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('conection established with mongodb server')).catch(err=>{
    console.log('error while connection',err)
})
const TimeSeriesModel = mongoose.model('TimeSeries', timeSeriesSchema);
module.exports=TimeSeriesModel