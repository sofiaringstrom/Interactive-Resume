<section id="experiences" class="info-group">

    <div id="container-experiences" class="container">

        <!-- *********************************** -->
        <!--  *********** EDUCATION ***********  -->
        <!-- *********************************** -->

        <article id="education">

            <div class="row">

            	<div class="col-md-10 col-md-offset-1">

            		<h2>Education</h2>

            	</div><!-- .col-md-12 -->

            </div><!-- .row -->

            <?php include 'db/actions/get_education.php'; ?>

        </article>


        <!-- *********************************** -->
        <!--  ************* WORK **************  -->
        <!-- *********************************** -->

        <article id="work-experience">

            <div class="row">

                <div class="col-md-10 col-md-offset-1">

                    <h2>Experience</h2>

                </div><!-- .col-md-12 -->

            </div><!-- .row -->

            <?php include 'db/actions/get_experiences.php'; ?>

        </article>

    </div><!-- .container -->

</section>