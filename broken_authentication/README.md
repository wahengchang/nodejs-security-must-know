# Broken Authentication 
 - [Session Managemetn](https://github.com/wahengchang/quick-express-boilerplate/tree/master/advance/sessionManagment)

#### Common use tools
The most guaranteed but time-consuming method to crack a password is the brute-force attack. It works by cycling through every possible combination

 - dictionary attack
 - [http://www.openwall.com/john/](http://www.openwall.com/john/)
 - [http://sectools.org/tool/brutus/](http://sectools.org/tool/brutus/)
 - [Hydra](http://sectools.org/tool/hydra/)

## Preventing 
 - Require strong passwords
 - Rate-limit maximum login attempts allowed per user ID or IP for a given time period
 - Lockout mechanism, preventing a user from logging in upon multiple failed attempts. 
 - Console Log all login failures with metadata (such as IP address) and lockouts, and actively monitor it.
 - Secure password recover
    - requires the old password
    - secret question prevert simple number, charater
    - Ensure that the forgot password and other recovery paths do not reveal the current password

#### Rainbow Tables Attack
bcrypt ([read more](https://github.com/kelektiv/node.bcrypt.js))
 - slow algorithm
 - take longer time to crak 

#### Securing Session Management
 - hijacking ： an attacker steals the session cookie from an active user session
 - XSS

 Protecting：
  
  - NEVER INCLUDE THE SID IN A URL PARAMETER




## Reference
 - [http://www.openwall.com/john/](http://www.openwall.com/john/)
 - [http://sectools.org/tool/brutus/](http://sectools.org/tool/brutus/)
 - [https://www.owasp.org/index.php/Session_Management_Cheat_Sheet#Session_ID_Properties](https://www.owasp.org/index.php/Session_Management_Cheat_Sheet#Session_ID_Properties)