<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use GuzzleHttp\Exception\RequestException;

class TeamController extends Controller
{
    public function getTeam($id)
    {
        $client = new Client();

        try {
            $response = $client->get("http://localhost:8082/teams/$id"); 
            if ($response->getStatusCode() === 200) {
                $data = json_decode($response->getBody()->getContents(), true); 
                return $data;
            } else {
                return null;
            }
        } catch (RequestException $e) {
            return null;
        }
    }
}
