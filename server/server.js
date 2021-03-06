const express = require('express')
const mongoose = require('mongoose')
//连接mongo
const DB_URL = 'mongodb://localhost:27017/afly'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('mongo connect success ')
})

// 类似于mysql的表 mongo里有文档，字段的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}))
//新增数据
// User.create({
//     user: 'xiaohua',
//     age: 18
// }, function (err, doc) {
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err);
//     }
// })
//删除数据
// User.remove({user:'afly'},function (err,doc) {
//     if(!err){
//         console.log(doc)
//     }
// })
//更新数据
// User.update({'user': 'xiaohua'}, {'$set': {age: 26}}, function (err, doc) {
//     if (!err) {
//         console.log(doc)
//     }
// })

//新建APP
const app = express()
app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>')
})


app.get('/data', function (req, res) {
    //查找数据
    //findOne  只是查找一条，返回的是一个对象
    User.find({user: 'xiaoming'}, function (err, doc) {
        res.json(doc)
    })
})
app.listen(9093, function () {
    console.log('Node app start at port 9093')
})