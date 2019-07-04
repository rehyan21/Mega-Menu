# JQuery Mega Menu Plugin

This plugin all about mega menu on your beautiful projects.

<h3>How It Works ?</h3>

This plugin includes all final assets in <code>build</code> directory. There you can find CSS and JS files which is necessary to use the plugin. that is <code>build/css/megamenu.min.css</code> and <code>build/js/megamenu.min.js</code>. Please use these files in your projects for using plugin.

<h4>How to get stared ?</h4>

Importing CSS file in your HTML

<pre>&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;build/css/megamenu.min.css&#x22;&#x3E;</pre>

Importing JQuery file in your HTML

<pre>&#x3C;script src=&#x22;https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js&#x22;&#x3E;&#x3C;/script&#x3E;</pre>

Importing Plugin JS file below JQuery in your HTML

<pre>
  &#x3C;script src=&#x22;build/js/megamenu.min.js&#x22; type=&#x22;text/javascript&#x22;&#x3E;&#x3C;/script&#x3E;
</pre>

Now all set to start using this amazing plugin !!

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
    <th>Value<th>
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


- Mention about carretarrows font-icon features
- Mention about animation add classes features
