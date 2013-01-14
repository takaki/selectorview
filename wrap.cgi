#!/usr/bin/python3

import cgi
import cgitb
import urllib.request
import lxml

form = cgi.FieldStorage()
url = form.getfirst("url", "")

print(url)

if url is None:
    pass
else:
    res = urllib.request.urlopen(url)

