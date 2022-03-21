<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cart;
use App\Models\Payment;
use App\Models\UserAddress;

class OrderDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'cart_id',
        'total_price',
        'payment_id',
        'address_id'
    ];

    public function cart()
    {
        return $this->hasOne(Cart::class);
    }

    public function payment()
    {
        return $this->belongsTo(Payment::class);
    }

    public function address()
    {
        return $this->belongsTo(UserAddress::class);
    }
}
