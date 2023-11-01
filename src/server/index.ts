import express from 'express'
import { api } from '@/server/api'

const app = express()
app.use(api)
app.get('/api/hello', (req, res) => res.send('Hello!'))
app.listen(3002, () => {
  console.log('listening localhost:3002 :)')
})
