<?php
header('Access-Control-Allow-Origin: *');
  $con = mysqli_connect("localhost","user","root@123","synchrony");
  mysqli_set_charset($con,"utf8");
  $sqlQuery = "SELECT * FROM pools ";
  $searchData = array();
  
  $sqlQuery .= " order by id desc";
  $results = mysqli_query($con,$sqlQuery );
  $arrayData = array();
   while($row = mysqli_fetch_array($results)){
	    $arrayData[] = $row;
	  
	 
  }

  print_r(json_encode($arrayData));

   //Closing the connection
   mysqli_close($con);