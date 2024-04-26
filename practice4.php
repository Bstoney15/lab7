<!DOCTYPE html>
<html>
<head>
    <title>Multiplication Table</title>
</head>
<body>

<h2>Multiplication Table</h2>

<form method="POST">
    <label for="number">Enter a number:</label>
    <input type="number" id="number" name="number" min="1" required>
    <input type="submit" value="Generate Table">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num = $_POST["number"];
    echo "<h3>Multiplication Table up to $num</h3>";
    echo "<table border='1'>";
    echo "<tr><th></th>";

    // Print column indexes
    for ($col = 1; $col <= $num; $col++) {
        echo "<th>$col</th>";
    }
    echo "</tr>";

    // Print table rows
    for ($row = 1; $row <= $num; $row++) {
        echo "<tr><th>$row</th>";
        for ($col = 1; $col <= $num; $col++) {
            echo "<td>" . ($row * $col) . "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
}
?>

</body>
</html>
