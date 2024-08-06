<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require 'connect.php';

// Check if the id parameter is provided in the GET request
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "SELECT name, image, price, `base-color` FROM merchendise WHERE id = ?";
    $stmt = mysqli_prepare($con, $sql);
    
    // Bind the id parameter to the placeholder
    mysqli_stmt_bind_param($stmt, "s", $id); // Assuming 'id' is a string
    
    // Execute the query
    if (mysqli_stmt_execute($stmt)) {
        $result = mysqli_stmt_get_result($stmt);
        $response = array('success' => true, 'data' => array());
        
        // Fetch rows and build response
        while ($row = mysqli_fetch_assoc($result)) {
            $product = array(
                'name' => $row['name'],
                'image' => $row['image'],
                'price' => $row['price'],
                'base_color' => $row['base-color'],
            );
            $response['data'][] = $product;
        }
        
        mysqli_stmt_close($stmt);
    } else {
        // Error handling if query execution fails
        $response = array('success' => false, 'error' => 'Failed to execute query: ' . mysqli_error($con));
    }
} else {
    // Error handling if id parameter is missing
    $response = array('success' => false, 'error' => 'Missing id parameter');
}

mysqli_close($con);
echo json_encode($response);
?>
