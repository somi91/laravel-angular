<?php namespace App\Http\Controllers\Bends;

use Auth;
use Input;
use Illuminate\Routing\Controller as BaseController;
use App\Models\TestModel;

class AuthController extends BaseController{

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('bends');
	}

	public function Login(){

		$email = Input::get('email');
		$password = Input::get('password');
        $user = new TestModel();
        $users = $user->where('email', '=', $email)->where('password', '=', $password)->get();
        if($users){
        	return $users;
        } else {
        	return 'invalid username/pass combo';
        }

		// if(Auth::attempt(Input::only('email','password'))){
		// 	return Auth::user();
		// }else{
		// 	return 'invalid username/pass combo';
		// }
	}
	 
	public function Logout(){
		Auth::logout();
		return 'logged out';
	}
 
}