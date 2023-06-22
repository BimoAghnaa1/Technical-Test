const benefit = [
    {
        id: 1,
        name: "Gaji Pokok",
        amount: 3000000,
        unit: 12
    },
    {
        id: 2,
        name: "Tunjangan Hari Raya (THR)",
        amount: 0,
        unit: 1
    },
    {
        id: 3,
        name: "Uang makan",
        amount: 100000,
        unit: 12
    },
    {
        id: 4,
        name: "Tunjangan shift",
        amount: 0,
        unit: 0.2
    },
]

const gajiPokok = benefit[0].amount
const thr = benefit[0].amount
const tunjanganShift = benefit[0].amount
//menyalin atau merubah nilai ampount
benefit[1].amount = benefit[0].amount
benefit[3].amount = benefit[0].amount

const kriteria = [{ 'Gaji Pokok': ['Tunjangan Hari Raya (THR) +', 'Tunjangan shift'] }];


console.log(benefit)

console.log(kriteria)