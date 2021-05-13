<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning p5.js | Index of projects</title>
    <style>
        a {
            text-decoration: none;
        }
    </style>
    <?php include 'functions.php'; ?>
</head>
<body>
    <h1>Current Projects</h1>
    <hr />

    
    <h2>Nature of Code</h2>
    <ul>
        <?php list_directory('projects'); ?>
    </ul>

    <h2>Coding Challenges</h2>
    <ul>
        <?php list_directory('CC'); ?>
    </ul>
    
</body>
</html>