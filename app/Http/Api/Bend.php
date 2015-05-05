<?php namespace App\Http\Api;
/**
 * Created by PhpStorm.
 * User: milos
 * Date: 5/4/2015
 * Time: 10:32 PM
 */

use App\Models\TestModel;

class Bend {

    private static $bend = null;
    private $model = null;

    public function __construct() {
        $this->model = new TestModel();
    }

    public static function GetBendInstance() {
        if(Bend::$bend == null){
            $bend = new static();
        }
        return $bend;
    }

    public function FindBend($bendId) {
        $user = $this->model->find($bendId);
        return $user;
    }

} 