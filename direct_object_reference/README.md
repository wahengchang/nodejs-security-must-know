#


#### URL on a vulnerable application: `www.example.com/profile/3032`

In this URL, 3032 is an ID of a profile record in the database. Because it is exposed in the URL and predictable, an attacker can simply change it to some other value and access other users’ restricted profiles.

#### Other example: `www.example.com/reports?name=feb2016report.pdf`
The name parameter in this URL specifies the exact filename to retrieve. Attackers can modify this predictable parameter to access reports for other months, for which they have neither paid nor are subscribers.

## Solution
The only real solution to this issue is to implement an access control. The user needs to be authorized for the requested information before the server provides it.

It is also often recommended to use something less obvious that is harder to enumerate as a reference. 


## Reference
 - [https://blog.detectify.com/2016/05/25/owasp-top-10-insecure-direct-object-reference-4/
](https://blog.detectify.com/2016/05/25/owasp-top-10-insecure-direct-object-reference-4/)

 - [https://www.owasp.org/index.php/Testing_for_Insecure_Direct_Object_References_(OTG-AUTHZ-004)](https://www.owasp.org/index.php/Testing_for_Insecure_Direct_Object_References_(OTG-AUTHZ-004))