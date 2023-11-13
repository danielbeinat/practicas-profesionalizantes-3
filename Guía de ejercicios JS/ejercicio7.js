const temperaturas = {
  meses: {
    ene: { max_abs: 42.4, max_media: 26.3, media: 20.3, min: 14.3 },
    feb: { max_abs: 38, max_media: 25, media: 12, min: 10 },
    mar: { max_abs: 36, max_media: 22, media: 13, min: 4 },
    abr: { max_abs: 30, max_media: 20, media: 11, min: 3 },
    may: { max_abs: 29, max_media: 19, media: 15, min: 10 },
    jun: { max_abs: 28, max_media: 17, media: 17, min: 9 },
    jul: { max_abs: 27, max_media: 16, media: 18, min: 9 },
    agos: { max_abs: 28, max_media: 22, media: 15, min: 7 },
    sep: { max_abs: 34, max_media: 23, media: 14, min: 6 },
    oct: { max_abs: 32, max_media: 13, media: 15, min: 7 },
    nov: { max_abs: 32, max_media: 14, media: 16, min: 6 },
    dic: { max_abs: 22, max_media: 19, media: 19, min: 10 },
  },
};

function convesion2(temperaturas) {
  for (const mes in temperaturas.meses) {
    console.log(mes);
    let F =
      (temperaturas.meses[mes].max_abs +
        temperaturas.meses[mes].max_media +
        temperaturas.meses[mes].media +
        temperaturas.meses[mes].min) *
        1.8 +
      32;

    console.log(
      "La conversión de grados Celsius a Fahrenheit es de: " + F + " F° "
    );
  }
}
convesion2(temperaturas);
