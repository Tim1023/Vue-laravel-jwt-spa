<?php

namespace App\Http\Proxy;

class TokenProxy{
    protected $http;
    public function __construct(\GuzzleHttp\Client $http)
    {
        $this->http = $http;
    }


    public function login($email,$password)
    {
        if(auth()->attempt(['email' => $email, 'password' => $password , 'is_active' => 1])) {
            return $this->proxy('password', [
                'username' => $email,
                'password' => $password,
                'scope' => ''
            ]);
        }
        return response()->json([
            'status' => false,
            'message' => 'Credentials not match'
        ],421 );
    }
    public function refresh()
    {
        $refreshToken = request()->cookie('refreshToken');

        return $this->proxy('refresh_token',[
            'refresh_token' =>$refreshToken
        ]);
    }



    public function logout()
    {
        $user = auth()->guard('api')->user();

        $accessToken = $user->token();

        app('db')->table('oauth_refresh_tokens')
            ->where('access_token_id',$accessToken->id)
            ->update([
                'revoked' => true,
            ]);

        $accessToken->revoke();

        return response()->json([
            'message' => 'logout!'
        ],204)->cookie('refreshToken', '', 0, null);
    }


    public function proxy($grantType, array  $data = [])
    {
        $data= array_merge($data,[
            'client_id'     => env('PASSPORT_CLIENT_ID'),
            'client_secret' => env('PASSPORT_CLIENT_SECRET'),
            'grant_type'    => $grantType,
            'scope'         => '',

        ]);
        $response = $this->http->post('http://vue-spa.test/oauth/token', [
            'form_params' => $data
        ]);


        $token = json_decode((string) $response->getBody(),true);

        return response()->json([
            'token' => $token['access_token'],
            'refreshToken' => $token['refresh_token'],
            'expires_in' => $token['expires_in']
        ])->cookie('refreshToken', $token['refresh_token'], 14400, null, null, false, true);
    }

}