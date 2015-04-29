<?php
/**
 * Created by PhpStorm.
 * User: milos
 * Date: 4/25/2015
 * Time: 8:04 PM
 */

namespace App\Models;

use Jenssegers\Mongodb\Model as Eloquent;

class TestModel extends Eloquent {

    protected $connection = 'mongodb';
    protected $collection = 'users_collection';

} 