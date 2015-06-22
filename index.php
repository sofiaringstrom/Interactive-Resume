<!DOCTYPE html>
<html>
<head>

	<title></title>

	<meta name="description" content="">
	<meta name="author" content="Sofia Ringström">
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

	<link rel="stylesheet" href="css/style.css">

</head>
<body>

	<div id="site-wrap">

        <!-- REMOVE DIV WHEN SITE DONE -->
        <div id="under-construction">
            <div id="warning-stripes-first"></div>
            <div id="warning-text">Sorry, this site is not done yet!<br />Please come back later! :)</div>
            <div id="warning-stripes-second"></div>
        </div>


        <nav class="navbar navbar-default navbar-fixed-top" id="site-nav" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#about">About</a></li>
                        <li><a href="#container-experiences">Experiences</a></li>
                        <li><a href="#abilities-scroll-to">Abilities</a></li>
                        <li><a href="#projects-scroll-to">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>


        <?php include ('sections/intro.php'); ?>


        <?php include ('sections/about.php'); ?>


        <section>

            <div id="parallax-first">

                <div class="parallax-first-bg"></div>

            </div>

        </section>


        <?php include ('sections/experiences.php'); ?>


        <section>

            <div id="parallax-second">

                <div class="parallax-second-bg"></div>

            </div>

        </section>


        <?php include ('sections/abilities.php'); ?>


        <?php include ('sections/projects.php'); ?>


        <?php include ('sections/contact.php'); ?>



        <?php include ('footer.php'); ?>



    </div><!-- #site-wrap -->


	<!-- Le scripts -->
	<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.14.2/TweenMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/1.3.0/jquery.scrollmagic.js"></script>
	<script src="js/main-scrollmagic.js"></script>
    <script src="js/progressbar.min.js"></script>
    <script src="js/custom_functions.js"></script>
    <script src="js/main.js"></script>

</body>
</html>