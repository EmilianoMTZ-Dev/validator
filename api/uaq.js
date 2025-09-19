export default async function handler(req, res) {
  // valores del documento (puedes ponerlos fijos o recibirlos por query)
  const numDocumento = '462985';
  const cadVerificacion = 'DGQEXJSPC';

  try {
    // hacemos POST al portal UAQ
    const response = await fetch('http://comunidad2.uaq.mx/validadocumento/VerificaDocumento.do', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        numDocumento,
        cadVerificacion
      }).toString()
    });

    const html = await response.text();

    // devolvemos HTML al navegador
    res.setHeader('Content-Type', 'text/html; charset=ISO-8859-1');
    res.status(200).send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error: ${err.message}`);
  }
}
