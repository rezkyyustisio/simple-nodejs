let nomor_hari = 3;
let nama_hari;

switch (nomor_hari) {
  case 1:
    nama_hari = "Senin";
    break;
  case 2:
    nama_hari = "Selasa";
    break;
  case 3:
    nama_hari = "Rabu";
    break;
  case 4:
    nama_hari = "Kamis";
    break;
  case 5:
    nama_hari = "Jumat";
    break;
  case 6:
    nama_hari = "Sabtu";
    break;
  case 7:
    nama_hari = "Minggu";
    break;
  default:
    nama_hari = "Tidak Dikenal";
}
console.log(nama_hari)

console.log('----------------')

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Masukan Angka `, number => {
  let hasil = number % 2
  if(hasil == 0){
    console.log('angka '+number+' adalah angka genap')
  } else {
    console.log('angka '+number+' adalah angka ganjil')
  }
  rl.close();
});

