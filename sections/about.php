<?php

include 'db/actions/get_about.php';

?>

<section id="about" class="info-group">

    <div class="container">

        <div class="row">

            <div class="col-md-10 col-md-offset-1 col-sm-12 text-center">
                
                <div class="row">

                	<div class="col-md-12">

                		<h2>About me</h2>
                		<br />
                		<h4><?php echo get_tagline(); ?></h4>

                	</div>
                	

                </div><!-- .row -->

                <hr />

                <div class="row">

                	<div class="col-md-4">

                		<p><?php echo get_context(); ?></p>

                	</div>

                	<div class="col-md-4">

                		<img class="about-img img-circle img-responsive" src="img/me.jpg">

                	</div>

                	<div class="col-md-4">

                		Some other stuff about me

                		<ul class="text-left">
                			<li>Age: <?php echo get_age(); ?></li>
                			<li>Hometown: <?php echo get_hometown(); ?></li>
                			<li>Country: <?php echo get_country(); ?></li>
                			<li>Coding since: <?php echo get_since(); ?></li>
                			<li>Likes: <?php echo get_likes(); ?></li>
                		</ul>

                	</div>
                	
                </div><!-- .row -->

            </div>

        </div>

    </div>

</section>