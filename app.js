/*
 * @Author: chufengman cfm77777@qq.com
 * @Date: 2022-06-23 10:07:11
 * @LastEditors: chufengman cfm77777@qq.com
 * @LastEditTime: 2022-06-23 10:07:58
 * @FilePath: \yaoqinghan\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const fs = require('fs')

const app = express()

app.use('/public',express.static('public'))

app.get('/', function (req, res) {
  let html = fs.readFileSync('./index.html','utf-8')
  res.header('Content-Type', 'text/html;charset=utf-8');
  res.send(html)
})

app.listen(80, () => { console.log('listening  80!') })