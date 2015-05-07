<?php namespace App\Http\Controllers\Bends;

use Auth;
use Input;
use Illuminate\Routing\Controller as BaseController;
use App\Models\TestModel;
use Response;
use App\Http\Api\Bend;
use Illuminate\Http\Request;

class AuthController extends BaseController{

	public function Login(){

		$email = Input::get('email');
		$password = Input::get('password');
        $user = new TestModel();
        $users = $user->where('email', '=', $email)->where('password', '=', $password)->get();
        
        if($users->isEmpty()){
        	return response::JSON(['error'=>['message'=>'invalid username/pass combo', 'status_code'=>422]]);
        } else {
        	return $users;
        }

		// if(Auth::attempt(Input::only('email','password'))){
		// 	return Auth::user();
		// }else{
		// 	return 'invalid username/pass combo';
		// }
	}

    public function GetAllBends(Request $request)
    {
        $bends = Bend::GetBendInstance()->GetAllBends();
        return response::JSON($bends);
    }
	 
	public function Logout(){
		Auth::logout();
		return 'logged out';
	}
 
}