<?php
/**
 * Created by PhpStorm.
 * User: milos
 * Date: 5/4/2015
 * Time: 10:13 PM
 */

namespace App\Http\Controllers\Bends;

use App\Http\Api\Bend\Bend;
use Illuminate\Routing\Controller as BaseController;
use Input;
use Response;

class BendsApi extends BaseController {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('bends');
    }

    public function GetBend(Input $input)
    {
        $nestooo = $input::get('Bend');
        return response::JSON(["nesto"=>$nestooo]);
        $nesto = Bend::GetBendInstance()->FindBend($nestooo);
        return response::JSON($nesto);
    }

} 