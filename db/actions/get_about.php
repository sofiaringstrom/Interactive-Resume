<?php

require 'db/db_connect.php';

$stmt = $mysqli->stmt_init();


$get_about_info = 'SELECT * FROM about ORDER BY id DESC';

if ( $stmt->prepare($get_about_info) ) {

	$stmt->execute();

	$stmt->bind_result($id, $tagline, $context, $age, $hometown, $country, $since, $likes);


	while ( mysqli_stmt_fetch( $stmt ) ) {

		/*
		 * Get tagline
		 *
		 * Gets the tagline for the content.
		 *
		 * @return The tagline in plain text.
		 */
		function get_tagline() {

			global $tagline;

			return $tagline;

		}

		/*
		 * Get context
		 *
		 * Gets the context given in the database.
		 *
		 * @return The context in plain text.
		 */
		function get_context() {

			global $context;

			return $context;

		}

		/*
		 * Get age
		 *
		 * Gets the age given for the person in the database.
		 *
		 * @return The age in plain text.
		 */
		function get_age() {

			global $age;

			return $age;

		}

		/*
		 * Get hometown
		 *
		 * Gets the hometown given in the database.
		 *
		 * @return The hometown in plain text.
		 */
		function get_hometown() {

			global $hometown;

			return $hometown;

		}

		/*
		 * Get country
		 *
		 * Gets the country given in the database.
		 *
		 * @return The country in plain text.
		 */
		function get_country() {

			global $country;

			return $country;

		}

		/*
		 * Get coding since year
		 *
		 * Gets the year for when the person started coding.
		 *
		 * @return The year in plain text.
		 */
		function get_since() {

			global $since;

			return $since;

		}

		/*
		 * Get likes
		 *
		 * Gets personal likes.
		 *
		 * @return The text for likes in plain text.
		 */
		function get_likes() {

			global $likes;

			return $likes;

		}

	}	

}

$stmt->close();

$mysqli->close();

?>