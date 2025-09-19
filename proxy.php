<?php
// Valores del documento
$numDocumento = "462985";
$cadVerificacion = "DGQEXJSPC";

// Hacemos POST desde el servidor
$url = "http://comunidad2.uaq.mx/validadocumento/VerificaDocumento.do";
$data = http_build_query([
    'numDocumento' => $numDocumento,
    'cadVerificacion' => $cadVerificacion
]);

$options = [
    'http' => [
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => $data
    ]
];
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

// Mostramos el resultado
echo $result;
?>
