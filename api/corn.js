const handleUpdate = require('../server/src/update')

export default function handler(req, res) {
  handleUpdate()
  res.status(200).end('Hello Cron!')
}
