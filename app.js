const yargs = require('yargs')
const catatan = require('./catatan.js')
// Kustomisasi versi yargs
yargs.version('10.1.0')
// Membuat perintah (command) 'tambah'
yargs.command({
command: 'tambah',
describe: 'tambah sebuah catatan baru',
handler: function () {
console.log('Sebuah catatan baru ditambahkan!')
}
})
// Perintah hapus
yargs.command({
command: 'hapus',
describe: 'hapus catatan',
handler: function () {
console.log('Catatan berhasil dihapus')
}
})
// Instruksi no.4 letakan disini

// letakan bagian ini pada baris terakhir
console.log(yargs.argv)
