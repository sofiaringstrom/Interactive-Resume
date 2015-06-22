<section id="contact">

    <div class="container">

    	<!-- <div class="row">

            <div class="col-md-10 col-md-offset-1 col-sm-12">

                <h2>Contact</h2>

            </div>

        </div> -->

        <article id="social">

            <div class="row">

            	<div class="col-md-5 col-md-offset-1">

            		<a href="https://github.com/sofiaringstrom" target="_blank">
                        <i class="fa fa-github"></i>
                        <span>https://github.com/sofiaringstrom</span>
                    </a>
                    <br />

                    <a href="http://se.linkedin.com/in/sofiaringstrom" target="_blank">
                        <i class="fa fa-linkedin"></i>
                		<span>http://se.linkedin.com/in/sofiaringstrom</span>
                    </a>
                    <br />

                </div><!-- .col-md-6 -->

                <div class="col-md-5 col-md-offset-1">

                    <a href="https://www.facebook.com/sofia.ringstrom" target="_blank">
                        <i class="fa fa-facebook-official"></i>
                        <span>https://www.facebook.com/sofia.ringstrom</span>
            		</a>
                    <br />

                    <a href="mailto:sofia.ringstrom@live.se" target="_blank">
                        <i class="fa fa-at"></i>
                        <span>sofia.ringstrom@live.se</span>
                    </a>
                    <br />

            	</div><!-- .col-md-5 -->

            </div><!-- .row -->

      	</article><!-- #social -->


        <article id="form">

            <div class="row">

                <div class="col-md-12">

                    <div id="contact-form-confirmation" class="text-center"></div>

                    <button id="btn-show-contact-form" class="btn btn-contact center-block">Say hi!</button>
                    <button id="btn-send-contact-form" class="btn btn-contact center-block">Send</button>


                    <form role="form" id="contact-form" class="col-md-6 col-md-offset-3" action="db/actions/send_contact_form.php" method="POST" enctype="text/plain">

                        <div class="form-error-msg"></div>

                        <div class="form-group">

                            <label for="contact-name">Name</label><span id="contact-name-info"></span>
                            <input type="text" class="form-control" id="contact-name" placeholder="Tony Stark">

                        </div>

                        <div class="form-group">

                            <label for="contact-email">Email</label><span id="contact-email-info"></span>
                            <input type="email" class="form-control" id="contact-email" placeholder="tony@starkindustries.com">

                        </div>

                        <div class="form-group">

                            <label for="contact-message">Message</label><span id="contact-message-info"></span>
                            <textarea rows="5" type="text" class="form-control" id="contact-message" placeholder="I am Iron Man."></textarea>

                        </div>

                        <div class="form-group" id="backup-validation">

                            <label for="contact-backup-validation">Input a number between 5 and 10 to prove you're not a robot:</label><span id="contact-backup-validation-info"></span>
                            <input type="number" class="form-control" id="contact-backup-validation">

                        </div>

                        <div id="primary-validation">

                            <label for="user-validation-box" id="label-user-validaiton">Place your mouse in the circle to prove you're not a robot:</label>
                            <div id="user-validaiton-box">

                                <div id="progress-container"></div>

                                <div id="user-validation-circle"></div>

                            </div>

                        </div>

                        <!-- <button class="btn btn-contact" id="contact-submit">Send</button> -->

                    </form>

                </div><!-- .col-md-12 -->

            </div><!-- .row -->

        </article><!-- #contact-form -->

    </div>

</section>

