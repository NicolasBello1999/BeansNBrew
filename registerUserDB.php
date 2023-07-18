<?php

// prevent user from accessing a page without entering information
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST["firstName"];
    $lname = $_POST["lastName"];
    $email = $_POST["email"];
    $pwd = $_POST["password"];

    try {
        require_once "connToDB.php"; // connect/include the connToDB script

        // our SQL query to put data into the database
        $query = "INSERT INTO users (fname, lname, email, pwd) VALUES (?, ?, ?, ?);";

        // our prepared statement to prevent SQL injection attacks
        $statement = $pdo->prepare($query);

        $statement->execute([$fname, $lname, $email, $pwd]); // submit user data

        // close client connection
        $pdo = null;
        $statement = null;

        header("Location: /register.html")

        die();
    } catch (PDOException $e) {
        die("Query failed: ". $e->getMessage());
    }
} else {
    header("Location: /register.html")
}