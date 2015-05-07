<?php namespace App\Http\Middleware;

use Closure;
use Input;
use App\Models\TestModel;
use Response;

class BendsAuthentication {

	/**
	 * The Guard implementation.
	 *
	 * @var Guard
	 */
	protected $email;
	protected $password;

	/**
	 * Create a new filter instance.
	 *
	 * @param  Guard  $auth
	 * @return void
	 */
	public function __construct(Input $input)
	{
		$this->email = $input::get('email');
		$this->password = $input::get('password');
	}

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		$user = new TestModel();
		if($this->email != null && $this->password != null){
	        $users = $user->where('email', '=', $this->email)->where('password', '=', $this->password)->get();
	        if(!$request->ajax()){
	        	if($users->isEmpty()){
					return response::JSON(['error'=>['message'=>'Unauthorized request', 'status_code'=>401]]);
				}
	    	}
	        
	        if($users->isEmpty()){
				return response::JSON(['error'=>['message'=>'Unauthorized request', 'status_code'=>401]]);
			}
		} else {
			return response::JSON(['error'=>['message'=>'Unauthorized request', 'status_code'=>401]]);
		}

		return $next($request);
	}

}
