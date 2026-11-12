
function hitungTotal() {
    const hargaPaket = parseInt(document.getElementById("paket-layanan").value);
    const jumlahUnggahan = parseInt(document.getElementById("jumlah-unggahan").value);
    const kodePromo = document.getElementById("kode-promo").value.trim().toUpperCase();
    if (jumlahUnggahan < 1 || isNaN(jumlahUnggahan)) {
        alert("Mohon masukkan jumlah unggahan yang valid (minimal 1).");
        return;
    }

    const hargaAwal = hargaPaket * jumlahUnggahan;
    let potonganDiskon = 0;

    if (kodePromo === "LOKAL10") {
        potonganDiskon = hargaAwal * 0.10;
    } else if (kodePromo !== "") {
        alert("Kode promo tidak valid atau sudah kedaluwarsa. Perhitungan dilanjutkan tanpa diskon.");
    }

    const totalBayar = hargaAwal - potonganDiskon;

    const formatRupiah = (angka) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(angka);
    };

    document.getElementById("harga-awal").innerText = formatRupiah(hargaAwal);
    document.getElementById("potongan-diskon").innerText = formatRupiah(potonganDiskon);
    document.getElementById("total-bayar").innerText = formatRupiah(totalBayar);
    document.getElementById("hasil-perhitungan").style.display = "block";
}