<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use App\Helpers\ResponseFormatter;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'username' => 'required|string|unique:users',
                'email' => 'email|required|unique:users',
                'phone' => 'required|string',
                'password' => 'required'
            ]);

            User::create([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => Hash::make($request->password)
            ]);

            $user = User::where('email', $request->email)->first();

            $tokenResult = $user->createToken('authToken')->plainTextToken;

            return ResponseFormatter::success([
                'access_token' => 'Bearer ' . $tokenResult,
                'token_type' => 'Bearer',
                'user' => $user,
            ], 'User Registered');
        } catch (Exception $e) {
            return ResponseFormatter::error([
                'message' => 'Something went wrong',
                'error' => $e
            ], 'Register Failed', 500);
        }
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|email',
                'password' => 'required'
            ]);

            $user = User::where('email', $request->email)->first();
            if(!$user) {
                return ResponseFormatter::error([
                    'message' => 'User not registered',
                ], 'Unauthorized', 401);
            }
            if(!Hash::check($request->password, $user->password)){
                return ResponseFormatter::error([
                    'message' => 'Password incorrect',
                ], 'Unauthorized', 401);
            }

            $tokenResult = $user->createToken('authToken')->plainTextToken;

            return ResponseFormatter::success([
                'access_token' => 'Bearer '.$tokenResult,
                'type_token' => 'Bearer',
                'message' => 'Login Successfully',
                'user' => $user
            ], 'Authorized');
        } catch (\Exception $e) {
            return ResponseFormatter::error([
                'message' => 'Something went wrong',
                'error' => $e
            ], 'Server Error', 500);
        }
    }
}
