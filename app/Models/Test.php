<?php namespace App\Models;

use Jenssegers\Mongodb\Model as Model;

class Test extends Model {
    protected $connection = 'mongodb';
    protected $collection = 'users_collection';
}
