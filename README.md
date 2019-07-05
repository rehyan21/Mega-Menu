<!--
  Title: JQuery Mega Menu
  -->

# JQuery Mega Menu Plugin

This plugin all about mega menu on your beautiful projects. it helps you to massive menu items under a roof.

Please checkout codepen <a target="_blank" href="https://codepen.io/rehyanuiux/pen/mZjYBK">demo</a>

<h3>How It Works ?</h3>

This plugin includes all final assets in <code>build</code> directory. There you can find CSS and JS files which is necessary to use the plugin. that is <code>build/css/megamenu.min.css</code> and <code>build/js/megamenu.min.js</code>. Please use these files in your projects for using plugin.

<h4>How to get stared ?</h4>

Importing CSS file in your HTML

<pre>&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;build/css/megamenu.min.css&#x22;&#x3E;</pre>

Importing CSS with <code>CDN</code>

<pre>
 &#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/gh/rehyan21/Mega-Menu/build/css/megamenu.min.css&#x22;&#x3E;
</pre>

Importing JQuery file in your HTML

<pre>&#x3C;script src=&#x22;https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js&#x22;&#x3E;&#x3C;/script&#x3E;</pre>

Importing Plugin JS file below JQuery in your HTML

<pre>
 &#x3C;script src=&#x22;build/js/megamenu.min.js&#x22; type=&#x22;text/javascript&#x22;&#x3E;&#x3C;/script&#x3E;
</pre>

Importing JS with <code>CDN</code>

<pre>

&#x3C;script src=&#x22;https://cdn.jsdelivr.net/gh/rehyan21/Mega-Menu/build/js/megamenu.min.js&#x22; type=&#x22;text/javascript&#x22;&#x3E;&#x3C;/script&#x3E;

</pre>

Then, add this <code>HTML</code> structure

<pre>
  &#x3C;div class=&#x22;mega-menu menuClass&#x22;&#x3E;
    &#x3C;div class=&#x22;mobile-nav-icon&#x22;&#x3E;
      &#x3C;a class=&#x22;&#x22; href=&#x22;#&#x22;&#x3E;
        &#x3C;span class=&#x22;fa fa-bars&#x22;&#x3E;&#x3C;/span&#x3E;
      &#x3C;/a&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;main-links&#x22;&#x3E;
      &#x3C;ul&#x3E;
        &#x3C;li&#x3E;&#x3C;a data-submenu=&#x22;products&#x22; href=&#x22;#&#x22;&#x3E;Products&#x3C;/a&#x3E;&#x3C;/li&#x3E;
        &#x3C;li&#x3E;&#x3C;a data-submenu=&#x22;career&#x22; href=&#x22;#&#x22;&#x3E;Brands&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;menu-dropdown&#x22;&#x3E;
      &#x3C;ul class=&#x22;menu-item-wrapper&#x22; id=&#x22;products&#x22;&#x3E;
        &#x3C;li class=&#x22;link-category&#x22;&#x3E;Men&#x3C;/li&#x3E;
        &#x3C;li&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Nike Shoe&#x3C;/a&#x3E;&#x3C;/li&#x3E;
        &#x3C;li&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Puma Boots&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
      &#x3C;ul class=&#x22;menu-item-wrapper&#x22; id=&#x22;career&#x22;&#x3E;
        &#x3C;li&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Caterpillar&#x3C;/a&#x3E;&#x3C;/li&#x3E;
        &#x3C;li&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Fossil&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
</pre>

Now all set to start using this amazing plugin !!

<h4>Optional</h4>

1. You have option to import <code>animated.css</code> library to animate mega-menu dropdowns using its classes

2. You have option to import <code>font-awesome.css</code> library to add caret icon using its classes

<br/>

<h3>Usage</h3>

Initiate <code>megaMenu()</code> function on your JS code like this

<pre>
  $(&#x22;.mega-menu&#x22;).megaMenu({
    
  })
</pre>

<br/>

<h3>Options</h3>

<table>
  <tr>
    <th>Options</th>
    <th>Type</th>
    <th>Default</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>caret</td>
    <td>Boolean</td>
    <td>false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>caretArrows</td>
    <td>Array</td>
    <td>up: "caret-up" <br> down: "caret-down"</td>
    <td>up, <br> down, <br>upUrl, <br> downUrl</td>
  </tr>
  <tr>
    <td>stickyHeader</td>
    <td>Boolean</td>
    <td>true</td>
    <td>false</td>
  </tr>
  <tr>
    <td>menuBehaviour</td>
    <td>string</td>
    <td>click</td>
    <td>Mouse Events</td>
  </tr>
  <tr>
    <td>highlighter</td>
    <td>Boolean</td>
    <td>true</td>
    <td>false</td>
  </tr>
  <tr>
    <td>highlightColor</td>
    <td>String</td>
    <td>red</td>
    <td>Any color with <code>#HEX</code> or by name</td>
  </tr>
  <tr>
    <td>followingHighlighter</td>
    <td>Boolean</td>
    <td>false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>textHighlighter</td>
    <td>Boolean</td>
    <td>false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>textHighlighterColor</td>
    <td>String</td>
    <td>red</td>
    <td>Any color with <code>#HEX</code> or by name</td>
  </tr>
  <tr>
    <td>animation</td>
    <td>Boolean</td>
    <td>false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>animationClass</td>
    <td>String</td>
    <td>Need to set animation:true</td>
    <td>Any custom animation class name or animated.css</td>
  </tr>
</table>

<h3>Examples</h3>

1. Header default set to sticky. if you wish to disable sticky header.

<pre>
  $(&#x22;.mega-menu&#x22;).megaMenu({
    stickyHeader: false
  })
</pre>

2. To set custom <code>caret</code> icon using <code>font-awesome.css</code>

<pre>
  $(&#x22;.mega-menu&#x22;).megaMenu({
    caret:true,
    caretArrows: [{
      up:&#x22;fa fa-angle-up&#x22;,
      down:&#x22;fa fa-angle-down&#x22;,
    }],
  })
</pre>

3. To set custom <code>caret</code> icon using image or SVG. 

<pre>
  $(&#x22;.mega-menu&#x22;).megaMenu({
    caret:true,
    caretArrows: [{
      upUrl: &#x22;assets/up-arrow.png&#x22;,
      downUrl: &#x22;assets/down-arrow.png&#x22;,
    }],
  })
</pre>

4. To set custom animation using <code>animate.css</code> or pass animation class over <code>animationClass</code> property.
<pre>
  $(&#x22;.mega-menu&#x22;).megaMenu({
    animation:true,
    animationClass:"animated fadeIn",
  })
</pre>


<h1>Thanks</h1>
