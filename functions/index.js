const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

exports.feed = functions.https.onRequest((req, res) => {
    admin.storage().bucket().file('qm.rss').download((err, content) => {
        res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
        res.send(content.toString())
    })
})