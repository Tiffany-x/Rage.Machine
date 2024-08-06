<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require 'connect.php';

// Check if the section parameter is provided in the GET request

    $sql = "SELECT name, image, price, `base-color`, id FROM merchendise WHERE section = 'apparel'";
    $stmt = mysqli_prepare($con, $sql);
    
    
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
                'id' => $row['id']
            );
            $response['data'][] = $product;
        }
        
        mysqli_stmt_close($stmt);
    } else {
        // Error handling if query execution fails
        $response = array('success' => false, 'error' => 'Failed to execute query: ' . mysqli_error($con));
    }


mysqli_close($con);
echo json_encode($response);
?>
