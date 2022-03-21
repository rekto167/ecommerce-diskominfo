<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class UserAddress extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'address',
        'province',
        'country'
    ];

    public function user()
    {
        $this->hasOne(User::class);
    }
}
