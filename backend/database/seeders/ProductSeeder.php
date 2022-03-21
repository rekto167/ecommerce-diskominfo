<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;


use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name' => 'BUKU MANAJEMEN KONSTRUKSI DENGAN APLIKASI MICROSOFT PROJECT',
                'price' => 85000,
                'desc' => 'Buku ini hadir untuk melengkapi buku penguasaan aplikasi Microsoft Project terhadap penerapannya di Proyek Konstruksi. Dari pemantauan di lapangan, penguasaan dan penerapan Microsoft Project terbagi dari tiga level :
                Level pertama, hanya menguasai cara memindahkan jadwal manual yang dibuat orang lain ke dalam Microsoft Project, dengan kata lain penguasaan tools Microsoft Project yang dominan dan hasilnya sebagai operator komputer saja
                Level kedua, pada level ini sudah lebih baik karena sudah bisa membuat jadwal sendiri dengan pemahaman metode kerja, keterkaitan antara kegiatan dan penempatan sumber daya yang tepat. Namun, sayangnya aplikator pada level ini belum bisa mengupdate kondisi-kondisi aktual lapangan, sehingga Microsof Project belumlah memberi manfaat sebagai tools manajemen di dalam proyek konstruksi.
                Level ketiga, ini sudah dapat dinyatakan sebagai perencana jadwal (planner), selain dapat membuat jadwal dengan ketergantungan pekerjaan yang baik, aplikator juga bisa menerapkan jadwal yang dibuat untuk pelaksanaan proyek yang dikerjakan dan mengontrol penyimpangan yang terjadi, selanjutnya aplikator dapat memanfaatkan hasil update Microsoft Project sebagai alat (tools) manajemen proyek.
                Secara rinci buku ini menjelaskan hal-hal yang perlu di dalam penjadwalan proyek baik dari segi keterkaitan pekerjaan, waktu, tenaga, biaya dan pemanfaatan jadwal, sehingga pembaca nantinya dapat mencapai level tiga secara pemahaman, tentunya dengan cara melakukan tahap-tahapan latihan pada buku ini. Namun untuk menjadi mahir pembaca juga perlu menambah jam terbang dengan melakukan latihan-latihan lainnya terutama pada kasus yang terdapat pada proyek yang sedang berlangsung',
                'category_id' => 1
            ],
            [
                'name' => 'Spuit set cake decorator 18 pcs',
                'price' => 70000,
                'desc' => 'Spuit set cake decorator 18 pcs',
                'category_id' => 2
            ],
            [
                'name' => 'Epson L3210 Printer EcoTank Multifungsi Print/Scan/Copy [GG]',
                'price' => 2750000,
                'desc' => 'Print/Scan/Copy
                Tinta 003 (CMYK)
                Garansi Resmi 2 Tahun',
                'category_id' => 3
            ]
        ];
        Product::insert(
            $data
        );
    }
}
