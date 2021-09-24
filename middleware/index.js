const cors = require('cors')

exports.connect = function(app) {
    app.use(cors())
}
