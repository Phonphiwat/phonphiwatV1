<template>
  <section >
   <p class="background h2"><img  :src="picture1" :width="size" :height="size"  /></p>
    <h1>Name:{{ getFullName() }}</h1>
    <p>Socail:<a :href="social" target="Phonphiwat">facebook</a></p>
    <p>first,last:{{ firstName }}{{ lastName }}</p>
    <p>age:{{ age }}</p>
    <p>Tel:{{Tel}}</p>
    <p>address:<span v-html="address"></span></p>
    <h1>HTML Lists</h1>
    <p id="special">Hobby:</p>
    <ul >
      <li>{{ hobby[0] }}</li>
      <li>{{ hobby[1] }}</li>
      <li>{{ hobby[2] }}</li>
    </ul>
    <ul style="list-style-type:square">
      <li>{{ hobby[0] }}</li>
      <li>{{ hobby[1] }}</li>
      <li>{{ hobby[2] }}</li>
    </ul>
    <ol>
      <li>{{ hobby[0] }}</li>
      <li>{{ hobby[1] }}</li>
      <li>{{ hobby[2] }}</li>
    </ol>
    <ol type="A">
      <li>{{ hobby[0] }}</li>
      <li>{{ hobby[1] }}</li>
      <li>{{ hobby[2] }}</li>
    </ol>
    <ol type="I">
      <li>{{ hobby[0] }}</li>
      <li>{{ hobby[1] }}</li>
      <li>{{ hobby[2] }}</li>
    </ol>
    <dl>
  <dt class="special1">Coffee</dt>
  <dd >- black hot drink</dd>
  <dt class="special2">Milk</dt>
  <dd>- white cold drink</dd>
</dl>
    <pre >Phonphiwat1</pre>
    <pre>Phonphiwat3</pre>

    <ait>Phonphiwat1</ait>
    <ait>Phonphiwat2</ait>
    <ait>Phonphiwat3</ait>
    <h1>HTML font</h1>
    <p style="font-family: 'Courier New', Courier, monospace;" > BBBBB</p>
    <pre style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Phonphiwat2</pre>
    <p style="color: red">Phonphiwat1</p>
    <p>{{ 2 + 6 }}</p>

    <h1>HTML formatting</h1>
    <p>Phon<strong>phiwat</strong> kongthong</p>
    <p>Phon<em>phiwat</em> kongthong</p>
    <p>Phon<mark>phiwat</mark> kongthong</p>
    <p>hhh<sub>hhhhhhhhh</sub></p>
    <p><del>blue</del>red</p>
    <p><q>blue</q>red</p>

    <h1>HTML Quotations</h1>
    <blockquote cite="https://www.facebook.com/profile.php?id=100010345440164">FB</blockquote>
    <bdo dir="rtl">What a beautiful day!</bdo><p>abcde<abbr title="World Health Organization" >WHOOOO</abbr></p>

   <h1>HTML Links</h1>
<p>Click to Open</p>
<a href="https://www.facebook.com/profile.php?id=100010345440164" style="text-decoration: none">Visit our HTML tutorial</a>
<p>Open to new page</p> 
<p><a href="https://www.facebook.com/profile.php?id=100010345440164" style="text-decoration: none" target="new page">Facebook me</a></p>
<p>Click photo to new page</p> 
<p class="h2"><a href="https://www.dcrub.com/html-links" target="new page"><img :src="picture2" :width="size" :height="size"/></a></p>
 <h1>HTML Table</h1>
 <table style="width:400px;">
  <caption>Names</caption>

  <tr>
    <th rowspan="1">First Name</th>
    <th rowspan="1">Last Name</th>
    <th rowspan="1">add</th>
    <th rowspan="1">address</th>
    <th >Points</th>
  </tr>
  <tr>
    <td colspan="1">A</td>
    <td >B</td>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td colspan="1">C</td>
    <td>D</td>
    <td>Jill</td>
    <td>Smith</td>
    <td>60</td>
  </tr>
  <tr >
    <td colspan="1">E</td>
    <td>F</td>
    <td>Jill</td>
    <td>Smith</td>
    <td>70</td>
  </tr>
</table>
<h1>HTML Computercode</h1>
<p>Code example:<code>var person</code></p>
<p>Code example:</p>
<pre><code>var person = firstName:"John",lastName:"Doe"</code></pre>
<p>A simple math equation: 
<var>x</var>= 3 + 2; </p>
<form class="h2"><input  type="button" value="OK"/></form>
 </section>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      firstName: "Phonphiwat",
      lastName: "Kongthong",
      age: 23,
      address: "<strong>Udonthani 32/3 Nonghan 41130</strong>",
      picture1:
        "https://scontent.fbkk29-3.fna.fbcdn.net/v/t1.6435-9/142431968_1315060432182126_4825707931452454288_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH_tAmSktY644YY-7riQXQ4PvPBrUcqn9w-88GtRyqf3NX1g0TAkNk9DVujmJICwTjR6s4b7UK7PMD5TKHaombP&_nc_ohc=0e_GL-yCZNwAX-YO8Q6&_nc_ht=scontent.fbkk29-3.fna&oh=00_AfCoY3x-HPH5Ncd8NcKEVIW2JsYBfvSRZvWHyW915MSr2Q&oe=63987794",
      picture2:"https://www.dcrub.com/wp-content/uploads/2020/02/HTML-Links-1024x576.jpg",
        size: 250,
      social: "https://web.facebook.com/profile.php?id=100010345440164",
      hobby: ["เล่นเกม", "ยิงปืนBBGUN", "ดูหนัง"],
      Tel: "0809790817",
    };
  },
 

  methods: {
    getFullName() {
      return this.firstName + this.lastName;
    },
  },
};
</script>

<style>


h1{
  border: 5px solid black;
  text-align: center;
  color:red;
  font-family: 'Courier New', Courier, monospace;
}
.h2{
  text-align: center;
}
.special1{
  color:blue
}
.special2{
background-color: antiquewhite;
 
}
.background{
  background-color: cornsilk;
}
#special{
  background-color: aqua;
}
</style>
