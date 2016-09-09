
# Interview Calendar App:

### Please visit the link below:
###  https://shrouded-caverns-32243.herokuapp.com/

## no need for launching the app, if you wish to do so locally please do the following

* clone the repo
* run npm install
* update the connection.js in the Config folder
* run the server.js file

### PROJECT REQUIREMENTS :

This will be a very simple Python web application which handles appointments.
You can choose your own framework (Django, Flask etc) (Used Javascript)

The appointments will be stored in a Sql Lite database with at least 1 table.
We recommend that one of the tables contains 2 columns:
(1) a datetime column which records the appointment's time and (2) a description column.

- Please use Bootstrap.
The back-end will be a Python script which handles requests
from the browser.  There are 3 types of requests which the python script
will handle:



1. If no  parameters are passed to the back-end Python script then the
   Python script renders the HTML document which contains the front-end.

2. If any of the AJAX parameters are provided, then this request is
   considered to be an AJAX call and the Python script renders the results
   as a JSON document.

3. If this is a form submission, the Python script will add a NEW
   appointment to the Sql Lite database using the values from the HTML form.

The frontend is a single web page which displays a "NEW" button, an
empty text field with a "SEARCH" button and the bottom of the page will
be an (initially empty) area for displaying the appointments in a table.

Please specify which version of Python you used. PLease generate and include "REQUIREMENTS .TXT" file, and a small readme that indicates what we need to run the application.

                =============================================

                =  +---+

                =  |NEW|

                =  +---+

                =

                =  +-------------------+  +------+

                =  |                   |  |SEARCH|

                =  +-------------------+  +------+

                =

                =  <appointments table will be here>

                =============================================



The appointments area is initially empty. The document's jQuery DOM

ready function will contain a call to a Javascript

getAppointments() function.



The Javascript getAppointments() function populates the appointments

area (the DOM above). getAppointments() will accept an optional search string.

getAppointments() issues an AJAX 'getAppointments' call to the back-end Python script,

passing the optional search string. The back-end will reply with a JSON

document containing the matching appointments, and the front-end will use the

resulting JSON object to render the data into the HTML <table> element.

The resulting HTML is inserted into the DOM so that the <table> appears below the search box.



                ==============================================

                =

                =  +---+

                =  |NEW|

                =  +---+

                =

                =  +-------------------+  +------+

                =  |                   |  |SEARCH|

                =  +-------------------+  +------+

                =

                =  +-------+---------+----------------+

                =  | DATE  | TIME    | DESCRIPTION    |

                =  +-------+---------+----------------+

                =  | May 2 | 11:00am | Something      |

                =  | May 2 | 12:00pm | Something else |

                =  | May 4 |  8:00am | Meet foo       |

                =  +-------+---------+----------------+

                =

                ==============================================



If the user enters text into the search text box and hits the SEARCH

button, the appointments area should clear and getAppointments() should

be called with text from the search box.  If the search text box is empty

when the SEARCH button is clicked, then ALL of the appointments should appear.

This should dynamically refresh the Table DOM, and not refresh the entire page.



                ==============================================

                =

                =  +---+

                =  |NEW|

                =  +---+

                =

                =  +-------------------+  +------+

                =  | Something         |  |SEARCH|

                =  +-------------------+  +------+

                =

                =  +-------+---------+----------------+

                =  | DATE  | TIME    | DESCRIPTION    |

                =  +-------+---------+----------------+

                =  | May 2 | 11:00am | Something      |

                =  | May 2 | 12:00pm | Something else |

                =  +-------+---------+----------------+

                =  <notice only the rows containing "Something" appear>

                ==============================================



The page should also contain a hidden form which contains fields for

adding a new appointment to the database.  Pressing the "NEW" button

changes the "NEW" button to "ADD" and shows the hidden form.



The hidden form should include a "CANCEL" button.  If the "CANCEL" button is

pressed, the form is hidden and the "ADD" button becomes "NEW" again.



                ==============================================

                =

                =  +---+ +------+

                =  |ADD| |CANCEL|

                =  +---+ +------+

                =

                =       +--------------------+

                =  DATE |                    |

                =       +--------------------+

                =       +--------------------+

                =  TIME |                    |

                =       +--------------------+

                =       +--------------------+

                =  DESC |                    |

                =       +--------------------+

                =

                =  +-------------------+  +------+

                =  |                   |  |SEARCH|

                =  +-------------------+  +------+

                =

                =  +-------+---------+----------------+

                =  | DATE  | TIME    | DESCRIPTION    |

                =  +-------+---------+----------------+

                =  | May 2 | 11:00am | Something      |

                =  | May 2 | 12:00pm | Something else |

                =  | May 4 |  8:00am | Meet foo       |

                =  +-------+---------+----------------+

                =

                ==============================================



When data is entered into the form and the "ADD" button is pressed, the

form should be submitted to the back-end.  Submitting the form also

reloads the entire web page.  (In other words, the form should be

submitted using normal HTML form semantics.  You don't need to submit the

form as an AJAX call.)
