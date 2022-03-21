<?php

namespace Database\Seeders;

use App\Models\ProductInventory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        return $this->call([
            ProductCategorySeeder::class,
            ProductInventorySeeder::class,
            ProductSeeder::class,
            ProductGallerySeeder::class,
        ]);
    }
}
