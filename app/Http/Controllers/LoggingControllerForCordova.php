<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LoggingControllerForCordova extends Controller
{
    public function logInfo(Request $request)
    {
        Log::info($request);
    }
}
