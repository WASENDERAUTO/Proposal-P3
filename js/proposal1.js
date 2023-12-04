document.addEventListener('DOMContentLoaded', () => {
    const proyekInfoDiv = document.getElementById('proyek-info');

    // Menggunakan URL relatif untuk mengambil file JSON dari folder yang sama
    const url = '../filejson/proposal.json';

    // Mengambil data JSON menggunakan fetch
    fetch(url)
        .then(response => response.json())
        .then(proyekData => {
            // Membuat elemen-elemen HTML untuk menampilkan data proyek
            const proyekTitle = document.createElement('h1');
            proyekTitle.textContent = proyekData.Judul;

            const proyekProposal = document.createElement('p');
            proyekProposal.textContent = `Proposal: ${proyekData.Proposal}`;

            const proyekDescription = document.createElement('p');
            proyekDescription.textContent = proyekData.Ditunjukan;

            const proyekLogo = document.createElement('img');
            proyekLogo.src = proyekData.logo;
            proyekLogo.alt = 'Logo Proyek';

            const oleh = document.createElement('p');
            oleh.textContent = `Oleh:`;

            const zz = document.createElement('p');
            zz.textContent = proyekData.ZZ;

            const zzx = document.createElement('p');
            zzx.textContent = proyekData.ZZX;

            const proyekProgram = document.createElement('p');
            proyekProgram.textContent = proyekData.Program;

            const kk = document.createElement('p');
            kk.textContent = `Kata Kunci : ${proyekData.KataKunci}`;

const kkx = document.createElement('p');
kkx.textContent = proyekData.PENDAHULUAN;

const kkxx = document.createElement('p');
kkx.textContent = proyekData.ZZC;

const zzvc = document.createElement('p');
zzvc.textContent = proyekData.ZZV;

const zzvcX = document.createElement('p');
zzvc.textContent = proyekData.ZZB

const zzv = document.createElement('p');
zzv.textContent = proyekData.ZZN;

// const zzvv = document.createElement('p');
// zzv.textContent = proyekData.ZZM;

const zzmm = document.createElement('p');
zzmm.textContent = proyekData.ZZMM;
            const Ditunjukan = document.createElement('p');
            Ditunjukan.textContent = `Ditunjukan: ${proyekData.Ditunjukan}`;

            const Program = document.createElement('p');
            Program.textContent = `Program: ${proyekData.Program}`;

            const Abstrak = document.createElement('p');
            Abstrak.textContent = `Abstrak: ${proyekData.Abstrak}`;

            const deskripsiaplikasi = document.createElement('p');
            deskripsiaplikasi.textContent = proyekData.DeskripsiAplikasi;

            const latarbelakang = document.createElement('p');
            latarbelakang.textContent = proyekData.LatarBelakangMasalah;

            const Tujuan = document.createElement('p');
            Tujuan.textContent = `Tujuan: ${proyekData.Tujuan}`;

            const LingkupDanManfaat = document.createElement('p');
            LingkupDanManfaat.textContent = proyekData.LingkupDokumentasi;

            const kajianpustaka = document.createElement('p');
            kajianpustaka.textContent = proyekData.KajianPustaka

            const pembimbing = document.createElement('p');
            pembimbing.textContent = proyekData.Pembimbing



            const tanggalSelesai = document.createElement('p');
            tanggalSelesai.textContent = proyekData.TanggalMulai

            const hasilProyek = document.createElement('p');
            hasilProyek.textContent = proyekData.TanggalSelesai

           const kontak = document.createElement('p');
           kontak.textContent = proyekData.HasilProyek;

            const targetAudience = document.createElement('p');
            targetAudience.textContent = proyekData.Kontak

            const fiturUTamam = document.createElement('p');
            fiturUTamam.textContent = proyekData.FiturUtama
             
            const Manfaat = document.createElement('p');
            Manfaat.textContent = proyekData.Manfaat;

            const a = document.createElement('a');
            a.textContent = proyekData.a;

            const b = document.createElement('a');
            b.textContent = proyekData.b;

            const c = document.createElement('a');
            c.textContent = proyekData.c;

            const d = document.createElement('a');
            d.textContent = proyekData.d;

            const e = document.createElement('a');
            e.textContent = proyekData.e;

            const f = document.createElement('a');
            f.textContent = proyekData.f;

            const g = document.createElement('a');
            g.textContent = proyekData.g;
            
            const h = document.createElement('a');
            h.textContent = proyekData.h;

            const i = document.createElement('a');
            i.textContent = proyekData.i;

            // Menambahkan elemen-elemen HTML ke dalam div proyek-info
            proyekInfoDiv.appendChild(proyekTitle);
            proyekInfoDiv.appendChild(proyekProposal);
            proyekInfoDiv.appendChild(proyekDescription)
            proyekInfoDiv.appendChild(oleh);
            proyekInfoDiv.appendChild(zz);
            proyekInfoDiv.appendChild(zzx);
            proyekInfoDiv.appendChild(proyekLogo);
            proyekInfoDiv.appendChild(proyekProgram);
            proyekInfoDiv.appendChild(Ditunjukan);
            proyekInfoDiv.appendChild(Program);
            proyekInfoDiv.appendChild(Abstrak);
            proyekInfoDiv.appendChild(kk);
            proyekInfoDiv.appendChild(kkx);
            proyekInfoDiv.appendChild(kkxx);
            proyekInfoDiv.appendChild(zzvc);
            proyekInfoDiv.appendChild(zzvcX);
            proyekInfoDiv.appendChild(zzv);
            // proyekInfoDiv.appendChild(zzvv);
            proyekInfoDiv.appendChild(zzmm);
            proyekInfoDiv.appendChild(deskripsiaplikasi);
            proyekInfoDiv.appendChild(latarbelakang);
            proyekInfoDiv.appendChild(Tujuan);
            proyekInfoDiv.appendChild(LingkupDanManfaat);
            proyekInfoDiv.appendChild(kajianpustaka);
            proyekInfoDiv.appendChild(pembimbing);
            proyekInfoDiv.appendChild(tanggalSelesai);
            proyekInfoDiv.appendChild(hasilProyek);
            proyekInfoDiv.appendChild(kontak);
            proyekInfoDiv.appendChild(targetAudience);
            proyekInfoDiv.appendChild(fiturUTamam);
            proyekInfoDiv.appendChild(Manfaat);
            proyekInfoDiv.appendChild(a);
            proyekInfoDiv.appendChild(b);
            proyekInfoDiv.appendChild(c);
            proyekInfoDiv.appendChild(d);
            proyekInfoDiv.appendChild(e);
            proyekInfoDiv.appendChild(f);
            proyekInfoDiv.appendChild(g);
            proyekInfoDiv.appendChild(h);
            proyekInfoDiv.appendChild(i);



            // Anda dapat melanjutkan dengan menambahkan elemen-elemen lainnya sesuai dengan data JSON Anda.
        })
        .catch(error => {
            console.error('Terjadi kesalahan saat mengambil data JSON:', error);
        });
});
