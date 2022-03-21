<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProductCategory;
use App\Models\ProductGallery;
use App\Models\ProductInventory;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'desc',
        'category_id'
    ];

    public function category()
    {
        return $this->belongsTo(ProductCategory::class);
    }

    public function gallery()
    {
        return $this->hasMany(ProductGallery::class);
    }

    public function inventory()
    {
        return $this->hasOne(ProductInventory::class);
    }
}
