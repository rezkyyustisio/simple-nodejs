const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Masukan Jari Jari `, jari_jari => {
  console.log("Luas Lingkaran Dengan Jari Jari "+jari_jari+"cm adalah "+3.14 * jari_jari**2+" cm2")

  console.log('--------------------------')
  rl.close();
});

const rll = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
let angka_hasil_konversi = [];
rll.question(`Masukan Angka Di Pisah Dengan Koma Cth: 1,2,3 | `, list_angka => {
    let pisah_angka = list_angka.split(',');
    pisah_angka.forEach((item) => {
        angka_hasil_konversi.push(item**item);
    });
    console.log(angka_hasil_konversi)
    rll.close();
});


