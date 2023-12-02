<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    // Check if passwords match
    if ($password !== $confirm_password) {
        die("Passwords do not match");
    }

    // Hash the password
    //$hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Connect to the database (replace these with your database credentials)
    $conn = new mysqli("localhost", "root", "", "created_db");

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert user data into the database
    $sql = "INSERT INTO login (username, email, password) VALUES ('$username', '$email', '$password')";
    echo $sql;

    if ($conn->query($sql) === TRUE) {
        // Start the session and store user information
        session_start();
        $_SESSION["username"] = $username;

        // Redirect to the main page (replace this with the actual page you want to redirect to)
        header("Location: index.php");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
