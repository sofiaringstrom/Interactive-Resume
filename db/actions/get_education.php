<?php

require 'db/db_connect.php';

$stmt = $mysqli->stmt_init();


$get_education_info = 'SELECT * FROM education ORDER BY id DESC';

if ( $stmt->prepare($get_education_info) ) {

	$stmt->execute();

	$stmt->bind_result($id, $school, $education, $year, $location, $description);


	while ( mysqli_stmt_fetch( $stmt ) ) {

		?>

        <div class="row">

        	<div class="col-md-3 col-md-offset-1">

        		<h3><?php echo $school; ?></h3>

        	</div><!-- .col-md-12 -->

        	<div class="col-md-7">

        		<h3><?php echo $education; ?></h3>

        	</div><!-- .col-md-12 -->

        </div><!-- .row -->

        <div class="row">

        	<div class="col-md-3 col-md-offset-1">

        		<p><?php echo $year; ?></p>

        		<p class="city"><?php echo $location; ?></p>

        	</div><!-- .col-md-12 -->

        	<div class="col-md-7">

        		<p><?php echo $description; ?></p>

        	</div><!-- .col-md-12 -->

        </div><!-- .row -->

        <?php

	}

}

$stmt->close();

$mysqli->close();

?>