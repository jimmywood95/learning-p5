<?php 
function list_directory($dir) {

    $parent = $dir;
            $folders = scandir($parent);


            array_shift($folders);
            array_shift($folders);

            foreach ($folders as &$projectPath) {
                $projectTitle = explode('_', $projectPath);
                if($parent == 'CC') {
                    array_shift($projectTitle);
                }
                
                $projectTitle = implode(' ', $projectTitle);
                
                if($projectPath !== '.' && 
                   $projectPath !== '..' &&
                   $projectPath !== '.DS_Store' &&
                   $projectPath !== '00blank') 
                {
                    echo '<li><a href="'. $parent .'/' . $projectPath . '/">' . ucwords($projectTitle) . '</a></li>';
                }
        }
}
?>