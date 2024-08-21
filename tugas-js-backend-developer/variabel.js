let age = 26
const nama = "Rezky"
let status_nikah = false
const nomor_identitas = Symbol('12345678')
let kucing = {
    name: "Meong",
    age: 1
}
let kabkota_kalbar = ['Pontianak', 'Kubu Raya']
let menikah;

console.log("Nama saya "+nama+", umur "+age+" tinggal di "+kabkota_kalbar[1]+" punya kucing bernama "+kucing.name+" yang umurnya baru "+kucing.age+" tahun")

console.log('----------------')

let angka_pertama = 5;
let angka_kedua = 2
let jumlah = angka_pertama + angka_kedua;        
let selisih = angka_pertama - angka_kedua; 
let kali = angka_pertama * angka_kedua;    
let bagi = angka_pertama / angka_kedua;   
let sisa_bagi = angka_pertama % angka_kedua;  

console.log(angka_pertama+'+'+angka_kedua+' = '+jumlah)
console.log(angka_pertama+'-'+angka_kedua+' = '+selisih)
console.log(angka_pertama+'x'+angka_kedua+' = '+kali)
console.log(angka_pertama+':'+angka_kedua+' = '+bagi)
console.log(angka_pertama+'%'+angka_kedua+' = '+sisa_bagi)

console.log('----------------')

console.log(angka_pertama == angka_kedua);  
console.log(angka_pertama === angka_kedua);
console.log(angka_pertama != angka_kedua);  
console.log(angka_pertama !== angka_kedua);
console.log(angka_pertama > 3);   
console.log(angka_pertama <= 1);


let benar = true;
let salah = false;
console.log('----------------')
console.log(benar && salah); 
console.log(benar || salah); 
console.log(!benar);  

