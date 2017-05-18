# Cross-Site Scripting

what may happen:
 - hijacking a user session
 - navigating to a malicious page
 - logging keystrokes
 - manipulating page contents
 - posting data to a remote server
 - installing a malicious program

## Preventing
 - Adding a __*content-security-policy (CSP)*__  response header is the easiest and most robust way to mitigate XSS
    . CSP header can also whitelist sources for JS, images, CSS, fonts, and media such as audio and video
    . npm module helmet
    . Exception: polyglot JPEG (protect: removing JPEG header comments)
 - ENCODE UNTRUSTED DATA
    . Success of this approach is that output encoding must be applied as per the context
 ```

    <a href="Untrusted Data">Show Details</a>

    <span>Untrusted Data</span>

 ```
 - HttpOnly Flag on Session Cookies
    . Even though it won’t prevent the malicious __script injection__
    . Preventing steal the session cookie


## Reference
 - [HTML5 Security Cheatsheet](https://html5sec.org/)
 - [www.w3.org/TR/CSP](https://www.w3.org/TR/CSP/#cspro-header)
 - [polyglot JPEG attack](http://blog.portswigger.net/2016/12/bypassing-csp-using-polyglot-jpegs.html)
 - [DOMPurify](https://github.com/cure53/DOMPurify)
 - [NPM: serve-index](https://www.npmjs.com/package/serve-index)
 - [NPM: mustache](https://www.npmjs.com/package/mustache)
 - [NPM: handlebars](https://www.npmjs.com/package/handlebars)