##CAPP 30370 Final 
========================

This is a site about Underwater Hockey.  It explains what the sport is, its history and how to play it.  It also includes videos of the sport as well as recent examples of its growing popularity in the news.

CSS
-------
The breakpoints are implemented so that the nav targets mobile, tablet and desktop layouts.  At a mobile layout the nav is a four-up column.  At a tablet layout the nav is two-by-two column.  At a desktop layout the nav is one block column.  
There is another breakpoint @500px and @700px so the siteheader can fit on a single line at all layout points (1000px, 700px, 500px). 
@500px there is also a breakpoint so that all text inside the wrapper and the footer text shrinks to a more suitable size for the view.  
Additionally, to meet the three-up or more column layout when viewed at desktop requirement, there is a breakpoint @1000px on the video and news page so the videos are stacked in a four-up column. 

The CSS animation that runs on a continuous loop is located in the footer.  The UWH player swims across the page, pulling a spin move  in the middle of the page.  This is done using a transformation that rotates on the Y axis 180 degrees and a keyframe move that translates the image across the page.  

The CSS animation that runs on a user interaction is located in the nav li.  There is a .5s transition where when the nav li is hovered over, it scales on the Y-axis, 1.5x it's height.  

The background image is standard picture of a pool that has been pulled from a url and put into the body of the CSS.  There is a wrapper inside this background image.  This allows for the white space where the content of the page lies. 

jQuery
--------
The visual jQuery interaction appears in the nav.  When a nav li is hovered over, the li background changes from white to cyan.  When the mouse is no longer on the li, the background reverts back to white.  