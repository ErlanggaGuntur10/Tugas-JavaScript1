// No 2
let nilaiAwal = 0;

for (let i = 1; i <= 10; i++){
    nilaiAwal += 2;
    console.log(`Nilai pada pengulangan ke-${i}: ${nilaiAwal}`);
}

// No 3
for (let i = 0; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i + " adalah bilangan genap");
    } else {
        console.log(i + " adalah bilangan ganjil");
    }
}

// No 4
let count = 0;
let repeat = true;

while (repeat) {
    const confirmation = confirm("Apakah anda mau mengulang?");

    if(confirmation){
        count++;
    } else {
        repeat = false;
        alert(`Perulangan sudah dilakukan sebanyak ${count} kali`);
    }
}

// No 5
let answer = "";

while (answer.toLowerCase() !== "impact byte") {
    answer = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");
    if (answer.toLowerCase() === "impact byte") {
        alert("Selamat jawaban kamu benar!");
    }
}
