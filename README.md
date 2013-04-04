# KineticWinJS Boilerplate
###### Written by Cory Gross

Meant to be used as a starter boilerplate app for Windows 8 games developed for
for the Windows Store written in JavaScript / HTML5. Uses the KineticJS Canvas
API. Currently has no other dependencies other than KineticJS and the WinJS
JavaScript Library included in the Windows SDK.

![Screenshot](KineticWinJS/images/screenshot.jpg "ScreenShot")

## Files Of Interest

 * [**default.html**][3]
   - This is your app's main page. I just have some very basic markup in here
     currently that creates the header and the container for the KineticJS
     canvas.
     You can see that the WinJS dependencies and such are also loaded in here. 
   - Any JavaScript you write will need to be linked in here with the script
     tag.
   - You have access to the [**WinJS CSS classes**][1] for use in your markup. 
   - You may also use [**Blend for Visual Studio 2012**][2] in order to more
     easily work with the markup and the Windows UI grid.

<br />

 * [**default.js**][4]
  - This is where WinJS is initialized, your have some events in here that get
    fired off that we can take note of.
  - `app.oncheckpoint` is fired off just before your app is suspended so that
    is where you should save any data, or perhaps pause or game.
  - `app.onactivated` is called when your app is loaded up and becomes active,
    it has a parameter named `args` which is examined to determine the previous
    execution state in order to determine if this is the first activation or if
    the app is being woken from suspension.
  - The `app.onactivated` method is where the KineticJS stage is initialized,
    but only on the first activation.

<br />

 * [**default.css**][5]
  - This is where your styling rules go. This is linked to by `default.html`
    and is defines the width and height of the KineticJS container.
  - There is also two other CSS files you may utilize. `ui-dark.css` and
    `ui-light.css` for swapping between the default light and dark themes for
    Windows 8 apps.
   
[1]: http://msdn.microsoft.com/en-us/library/windows/apps/hh770562.aspx
[2]: http://msdn.microsoft.com/en-us/library/windows/apps/jj129478.aspx
[3]: KineticWinJS/default.html
[4]: KineticWinJS/js/default.js
[5]: KineticWinJS/css/default.css
[6]: KineticWinJS/images/screenshot.jpg