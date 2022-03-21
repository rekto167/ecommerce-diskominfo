<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\Models\ProductCategory;

class ProductCategorySeeder extends Seeder
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
                'name' => 'Buku',
                'slug' => 'buku'
            ],
            [
                'name' => 'Dapur',
                'slug' => 'dapur'
            ],
            [
                'name' => 'Elektronik',
                'slug' => 'elektronik'
            ]
        ];
        ProductCategory::insert(
            $data
        );
    }
}
