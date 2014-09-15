geoLocationDocExtension-QV11
================
This is a simple document extension which leverages the geoLocation capabilities of most modern browsers to retrieve the longitude and latitude coordinates of the user's current location.
Use this page as a reference to see which browsers and browser version support this:
[http://caniuse.com/#feat=geolocation](http://caniuse.com/#feat=geolocation)

*********************************
Installation & Use
*********************************
To install this document extension, simply double qlick the .qar file in the folder you've downloaded.  Then, to add it to your QVW, go to Settings -> Document Properties...-> Extensions and find the "locate" document extenion in the list.  Add that extension to the document.

All this extension does is send the longitude and latitude coordinates to two QliKView variables. So, all you need to do is create a variable called "vLat" and a variable called "vLong."  Then, when the document runs, it will set those two variables, and you can use them however you want in your app.

This demo app currently uses the same functionality to plot your current location on a google map:
[http://us-b.demo.qlik.com/QvAJAXZfc/opendoc.htm?document=qvdocs%2FGPS%20-%20Store%20Finder.qvw&host=demo11&anonymous=true](http://us-b.demo.qlik.com/QvAJAXZfc/opendoc.htm?document=qvdocs%2FGPS%20-%20Store%20Finder.qvw&host=demo11&anonymous=true)