const multer = require('multer');
const path = require('node:path');

// declaro una configuración de upload
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const ruta = path.join(__dirname, '..', 'public', 'avatares');
    cb(null, ruta);
  },
  filename: function(req, file, cb) {
    const filename = file.fieldname + '-' + Date.now() + '-' + file.originalname;
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;