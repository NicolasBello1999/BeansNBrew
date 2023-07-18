<?php
// Connects to our AWS database

$dbhost = $_SERVER["beansnbrew.cs0euqo9awbu.us-east-2.rds.amazonaws.com"];
$dbport = $_SERVER["3306"];
$dbname = $_SERVER["beansNbrew"];
$charset = 'utf8';

$dsn = "mysql:host={$dbhost};port={$dbport};dbname={$dbname};charset={$charset}";
$username = $_SERVER["admin"];
$password = $_SERVER["x[3hoy34]c"];

$pdo = new PDO($dsn, $username, $password);
try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connection Successful...";
} catch (PDOException $e) {
    echo "Connection failed: ". $e->getMessage();
}

/*
$dns = "beansnbrew.cs0euqo9awbu.us-east-2.rds.amazonaws.com";
$dbuserName = "admin";
$dbpassword = "x[3hoy34]c";

try {
    $pdo = new PDO($dns, $dbuserName, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: ". $e->getMessage();
}
*/