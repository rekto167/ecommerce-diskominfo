<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class ProductGallery extends Model
{
    use HasFactory;

    protected $fillable = [
        'url_image',
        'product_id'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
