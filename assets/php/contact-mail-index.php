<?php

    // Only process POST requests.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $f_country = strip_tags(trim($_POST["country"]));
				$f_country = str_replace(array("\r","\n"),array(" "," "),$f_country);
        $f_contact_number = trim($_POST["contact_number"]);
        $f_date = trim($_POST["date"]);
        $f_message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($f_country) OR empty($f_message) OR !preg_match('/^[0-9]{10}$/', $f_contact_number)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "admin@devitems.com";

        // Set the email subject.
        $subject = "New contact from $f_country";

        // Build the email content.
        $email_content = "Country: $f_country\n";
        $email_content .= "Contact Number: $f_contact_number\n\n";
        $email_content .= "Date: $f_date\n\n";
        $email_content .= "Message:\n$f_message\n";

        // Build the email headers.
        $email_headers = "From: $f_country <$f_contact_number>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
