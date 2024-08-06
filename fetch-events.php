<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require 'connect.php';


$sql = "SELECT poster, date_time, location, ticket_price FROM live_performance"; // Remove WHERE clause
$query = mysqli_query($con, $sql);
$response = array('success' => false, 'data' => array());
$product = array();
$row_count = 0;

if ($query -> num_rows > 0) {
    while ($row = mysqli_fetch_assoc($query)) {
        $event = array(
            'poster' => $row['poster'],
            'price' => $row['ticket_price'],
            'location' => $row['location'], // Use correct column name in array
            'time' => $row['date_time'],
        );
        
        $response['data'][] = $event;
        $row_count++;
    }
    $response['success'] = true;
} else {
    $response['error'] = 'Failed to execute query: ' . mysqli_error($con);
}

mysqli_close($con);
echo json_encode($response);
?>

