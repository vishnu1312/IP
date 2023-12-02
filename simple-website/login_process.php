<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Connect to the database (replace these with your database credentials)
    $conn = new mysqli("localhost", "root", "", "created_db");

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve user data from the database
    $sql = "SELECT * FROM login WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // Check if the provided password matches the stored password
        if ($password === $row["password"]) {
            // Start the session and store user information
            session_start();
            $_SESSION["username"] = $username;

            // Redirect to the main page (replace this with the actual page you want to redirect to)
            header("Location: mainpage.php");
            exit();
        } else {
            echo "Invalid password";
        }
    } else {
        echo "User not found";
    }

    $conn->close();
}
?>
