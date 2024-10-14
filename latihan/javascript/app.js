import { add, multiply } from './math.js'; // Mengambil fungsi dari file math.js

function kalkulator() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);

    let sum = add(number1, number2);
    let kali = multiply(number1, number2);
    document.getElementById("result").innerHTML = 
    `<p> Hasil Penjumlahan dari ${number1} + ${number2} = ${sum} </p>
     <p> Hasil Perkalian ${number1} * ${number2} = ${kali} </p>`;
}

// Menambahkan event listener pada tombol
document.getElementById("kalkulator").addEventListener("click", kalkulator);
