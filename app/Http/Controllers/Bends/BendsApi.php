<?php
/**
 * Created by PhpStorm.
 * User: milos
 * Date: 5/4/2015
 * Time: 10:13 PM
 */

namespace App\Http\Controllers\Bends;

use App\Http\Api\Bend;
use App\Http\Controllers\Controller;
use Response;
use Illuminate\Http\Request;

class BendsApi extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('bends');
    }

    public function GetBend(Request $request)
    {
        $bend = Bend::GetBendInstance()->FindBend($request->query('id'));
        return response::JSON($bend);
    }

} 