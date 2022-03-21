<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class ProductInventory extends Model
{
    use HasFactory;

    protected $fillable = [
        'quantity',
        'product_id'
    ];

    public function product()
    {
        return $this->hasMany(Product::class);
    }
}
