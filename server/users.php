<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    //we'll name this "accounts", and make it a 2D array
    $accounts = array (
        array("userId" => 1,"username" => "Glenn", "password" => "my password!"),
        array("userId" => 2,"username" => "Fred", "password" => "weeeeeee"),
        array("userId" => 3,"username" => "Brian", "password" => "aidsfijasjdfiawe"),
        array("userId" => 4,"username" => "Tom", "password" => "asdfajweiogjr"),
        array("userId" => 5,"username" => "Kodlee Yin", "password" => "ghreoghrueagre")
    );

    echo json_encode($accounts);
?>