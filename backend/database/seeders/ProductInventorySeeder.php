<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\ProductInventory;


class ProductInventorySeeder extends Seeder
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
                'quantity' => 100,
                'product_id' => 1
            ],
            [
                'quantity' => 200,
                'product_id' => 1
            ],
            [
                'quantity' => 300,
                'product_id' => 1
            ],
        ];

        ProductInventory::insert($data);
    }
}
