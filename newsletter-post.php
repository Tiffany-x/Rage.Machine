<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require 'connect.php';
$response = array('success' => false);
$name = $_POST['name'];
$email_address = $_POST['email_address'];

$query = "INSERT INTO fans VALUES ('', '$name', '$email_address', now())";

if ($stmt = mysqli_prepare($con, $query)) {
    if (mysqli_stmt_execute($stmt)) {
        $response['success'] = true;
    } else {
        $response['error'] = 'Failed to execute query: ' . mysqli_error($con);
    }

    mysqli_stmt_close($stmt);
} else {
    $response['error'] = 'Failed to prepare query: ' . mysqli_error($con);
}

mysqli_close($con);

echo json_encode($response);
?>