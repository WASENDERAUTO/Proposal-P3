import data from "../filejson/proposal.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

// console.log(`${data.article.judulProposal}`)
setInner("judulProposal", data.article.judulProposal);

//Abstrak
setInner("abstrakProposal", `
<h2>Abstrak</h2>
<p>${data.article.abstrakProposal}</p>
<p>${data.article.katakunciProposal}</p>
`);

//Latar Belakang
setInner("latarBelakangProposal", `
<h2>Latar Belakang</h2>
<p>${data.article.latarBelakang1}</p>
`);

//Deskripsi Aplikasi
let listDeskripsiAplikasi = data.article.deskripsiAplikasi1.map((item, index) => {
    return `<li>${item}</li>`;
})
setInner("deskripsiAplikasi", `
<h2>Deskripsi Aplikasi</h2>
<p>${data.article.deskripsiAplikasi}</p>
<ul>${listDeskripsiAplikasi.join("")}</ul>
`);

//Tujuan Aplikasi
let listTujuanAplikasi = data.article.tujuanAplikasi.map((item, index) => {
    return `<li>${item}</li>`;
})
setInner("tujuanAplikasi", `
<h2>Tujuan Aplikasi</h2>
<ul>${listTujuanAplikasi.join("")}</ul>
`);

//Tujuan Aplikasi
let listLingkupDokumentasi = data.article.lingkupDokumentasi.map((item, index) => {
    return `<li>${item}</li>`;
})
setInner("lingkupDokumentasi", `
<h2>Lingkup Dokumentasi</h2>
<ul>${listLingkupDokumentasi.join("")}</ul>
`);


//waktuPelaksanaan
setInner("waktuPelaksanaan", `
<h2>Waktu Pengerjaan</h2>
<p>${data.article.waktuPelaksanaan}</p>
`);

//jadwalPelaksanaan
setInner("jadwalPelaksanaan", `
<h2>Jadwal Pelaksanaan</h2>
<img>${data.article.jadwalimgelaksanaan}</img>
`);


// app.js