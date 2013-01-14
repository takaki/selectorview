#!/usr/bin/python3

import cgi
import cgitb
import urllib.request
from lxml import etree
import sys

form = cgi.FieldStorage()
url = form.getfirst("url")

sys.stdout.buffer.write(b'Content-Type: text/html\n')
sys.stdout.buffer.write(b'\n')
if url is None:
    print("Nothing")
else:
    res = urllib.request.urlopen(url)
    sys.stdout.buffer.write(res.read())
