<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\OrderDetail;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'payment_type','status','user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function orders_details_id()
    {
        return $this->hasOne(OrderDetail::class);
    }
}
