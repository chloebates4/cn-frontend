<?php

require_once "BaseTest.php";


class LoginControllerTest extends BaseTest
{

	public function testProcessLogIn()
	{
		
		$a = new \Me\Controller\LoginController(); 

		$request = new stdClass();
		$request->username = "random_username"; 


		$a->process_login($request, null); 

		$this->expectOutputRegex("/\<title\>Cryptonate - Login\<\/title\>/");
	}


}




