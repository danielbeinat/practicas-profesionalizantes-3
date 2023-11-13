factura = {
  numero_de_factura: 641,

  emisor: {
    fecha_de_emision: "27 / 07 / 2016",
    cuit: 20522763922,
    razon_social:
      "INSTITUTO NACIONAL DE SERVICIOS SOCIALES PARA JUBILADOS Y PE",
    domicilio: "Peru 169 - Capital Federal , Ciudad de Buenos Aires",
    condicion_iva: "iva responsable inscripto",
  },

  receptor: {
    Apellido_nombre:
      "INSTITUTO NACIONAL DE SERVICIOS SOCIALES PARA JUBILADOS Y PE",

    cuit: 30522763922,
    IVA: "IVA sujeto Exento",
    condicion_de_venta: "cuenta corriente",
    domicilio: "Peru 169 - Capital Federal , Ciudad de Buenos Aires",
  },

  descripcion: {
    codigo: "UGL 6- CAPITA SALUD MENTAL PERIODO 06/16",
    Producto_servicio: "UGL 6- CAPITA SALUD MENTAL PERIODO 06/16",
    cantidad: 1.0,
    Medida: "otras unidades",
    Precio: 26400211,
    bonif: 0.0,
    imp_bonif: 0.0,
    subtotal: 264002.11,
  },
};

console.log(factura.emisor.condicion_iva);
