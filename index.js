const app = require('./src/hello')

// Supprime cette ligne car Vercel n'a pas besoin de spécifier un port
// app.listen(3000, () => {
//   console.log('Server listening on http://localhost:3000')
// });

// Exporte l'application Express pour que Vercel puisse la gérer
module.exports = app
