// api/uaq.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Valores de tu documento
  const numDocumento = '462985';
  const cadVerificacion = 'DGQEXJSPC';

  try {
    // Hacemos POST desde Vercel a la UAQ
    const response = await fetch('http://comunidad2.uaq.mx/validadocumento/VerificaDocumento.do', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `numDocumento=${encodeURIComponent(numDocumento)}&cadVerificacion=${encodeURIComponent(cadVerificacion)}`
    });

    const html = await response.text();

    // Devolvemos el HTML tal cual
    res.setHeader('Content-Type', 'text/html; charset=ISO-8859-1');
    res.status(200).send(html);

  } catch (err) {
    res.status(500).send(`Error: ${err.message}`);
  }
};
