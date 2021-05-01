<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;


class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (!$token = JWTAuth::attempt($credentials)) {
                return response([
                    'status' => 'error',
                    'error' => 'invalid.credentials',
                    'msg' => 'Invalid Credentials.'
                ], 400);
        }
        return response(
            [
                'status' => 'success',
                'token' => $token
            ]
        )->header('Authorization', $token);
    }
}
