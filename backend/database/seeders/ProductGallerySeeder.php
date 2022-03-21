<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\ProductGallery;

class ProductGallerySeeder extends Seeder
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
                'urlImage' => storage_path('public' . 'buku.jpg'),
                'product_id' => 1
            ],
            [
                'urlImage' => storage_path('public' . '0ed674cd-baf5-4f89-997a-890da871d28e.jpeg'),
                'product_id' => 2
            ],
            [
                'urlImage' => storage_path('public' . '21f8256a-cc1a-41be-9c8f-52f327418e90.jpeg'),
                'product_id' => 2
            ],
            [
                'urlImage' => storage_path('public' . '623c2702-2d85-4cab-8e62-35de68b90c48.jpeg'),
                'product_id' => 2
            ],
            [
                'urlImage' => storage_path('public' . '5c7d0e78-1b1f-4d48-b7a8-924be01746b0.jpg'),
                'product_id' => 3
            ],
            [
                'urlImage' => storage_path('public' . '05d07451-23f9-4942-8cb9-87b9060bac20.jpg'),
                'product_id' => 3
            ],
            [
                'urlImage' => storage_path('public' . '9e76ef97-9d24-4639-985d-9de1af799124.jpg'),
                'product_id' => 3
            ],
            [
                'url_image' => storage_path('public' . '576e72c9-3d0e-4d04-85cb-1925ff19cceb.jpg'),
                'product_id' => 3
            ],
        ];

        ProductGallery::insert($data);
    }
}
