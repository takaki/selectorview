#!/usr/bin/python3

import cgi
import cgitb
import urllib.request
from lxml import etree
import sys

form = cgi.FieldStorage()
url     = form.getfirst("url")
convert = form.getfirst("convert")

sys.stdout.buffer.write(b'Content-Type: text/html\n')
sys.stdout.buffer.write(b'\n')
if url is None:
    print("Nothing")
else:
    res = urllib.request.urlopen(url)
    if convert == 'checked':
        tree = etree.HTML(res.read())
        for e in tree.xpath('//a'):
            href = e.attrib['href']
            e.attrib['href'] = urllib.request.urljoin(url, href)
        for e in tree.xpath('//link'):
            href = e.attrib['href']
            e.attrib['href'] = urllib.request.urljoin(url, href)
        for e in tree.xpath('//img'):
            href = e.attrib['src']
            e.attrib['src'] = urllib.request.urljoin(url, href)
        for e in tree.xpath('//script'):
            href = e.attrib.get('src')
            if href is not None:
                e.attrib['src'] = urllib.request.urljoin(url, href)
        sys.stdout.buffer.write(etree.tostring(tree,method='html'))
    else:
        sys.stdout.buffer.write(res.read())
