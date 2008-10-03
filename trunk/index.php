<?
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en"><head>
<meta content="text/html; charset=UTF-8" http-equiv="content-type"><title>gtdgears</title>
<script  type="text/javascript"  src="gears_init.js"></script>
<script  type="text/javascript" src="prototype.js"></script>

<link rel="shortcut icon" type="image/x-icon" href="http://www.kompozer.net/favicon.ico">
<link rel="stylesheet" href="gtdgears_files/style.css" type="text/css">
<script>
     var db;

function sync(context)
     {

     new Ajax.Request( 'actions.php?con='+context, { method:  'get',
       onSuccess: function( transport ) {
        var actionTags;
     actionTags =  transport.responseXML.documentElement.getElementsByTagName( 'action' );
     //actionTags =  transport.responseXML.documentElement.length;
   
     
    for( var a = 0; a < actionTags.length;  a++ ) {
           
           aid=parseInt( actionTags[a].getAttribute('id'));
           abid=parseInt(  actionTags[a].getAttribute('buc_id') );
           acid=parseInt(  actionTags[a].getAttribute('ctxt_id') );
           aname=actionTags[a].getAttribute('name'); 
           astartdate=actionTags[a].getAttribute('start_date');
           aenddate=actionTags[a].getAttribute('end_date');
           adesc=actionTags[a].firstChild.nodeValue;
           addAction(aid, abid, acid, aname, adesc, astartdate,aenddate);
      }
    
       showActions();
     } } );
     }

function initializedb()  {
     if (!window.google || !google.gears)
       return;

  try {
       db =  google.gears.factory.create('beta.database', '1.0');
     } catch (ex) {
       alert('Could not create database: ' +  ex.message);
     }

  if (db) {
       db.open('gtdgears')
       db.execute('create table if not exists  actions' +
          ' ( act_id int, act_buc_id int, act_ctxt_id int, act_name varchar(255), act_descr text, act_startdate datetime, act_enddate datetime )');
     }
     showActions();
     }

function showAction( id  )
     {
     var rs = db.execute( 'select act_descr from actions where act_id = ?', [ id ] );

     var found = 0;
     while (rs.isValidRow()) {  $('elDescr').innerHTML = rs.field(0); rs.next(); }
     rs.close();
     }

function showActions()
     {
     while( $('elActions').rows.length > 0 )
      $('elActions').deleteRow( -1 );

  var rs = db.execute( 'select * from actions'  );

     while (rs.isValidRow())
     {  
       var elTR =  $('elActions').insertRow( -1 );
       var elTD = elTR.insertCell( -1 );
       elTD.onmouseover = function() {  this.style.background = '#eee'; };
       elTD.onmouseout = function() {  this.style.background = 'none'; };
       elTD.id = rs.field( 0 );
       elTD.onmouseup = function() { showAction(  this.id ); };
       elTD.appendChild( document.createTextNode(  rs.field(3) ) );
       rs.next();
     }
     rs.close();
     }

function testaddAction(){
      db.execute('insert into actions values (2, 1, "dsad", "dsada", "2008-10-01 13:47:13", "2008-10-01 13:47:13")');       
}

function addAction(aid, abid, acid, aname, adesc, astartdate,aenddate )
     {

     var rs = db.execute( 'select * from actions  where act_id = ?', [ aid ] );
     var found = 0;
     while (rs.isValidRow()) { found++; rs.next();  }
     rs.close();
     if ( found == 0 )
       db.execute('insert into actions values (?, ?, ?, ?, ?, ?, ?)', [aid, abid,acid,aname,adesc,astartdate,aenddate]);

     }

   </script>

</head>
<body  onload="initializedb()">
<div style="height: 27px;" id="header">
</div>
<div id="menu1">
<ul>
<li> <a class="" href="#">Personal</a>
</li>
<li>
<a href="javascript:void  sync(1);">MW</a>
</li>
<li> <a class="" href="#">Lanux</a>
</li>
</ul>
</div>
<div id="menu2">
<h2>NUEVA Acción </h2>
<div align="center">
<form><textarea cols="20" rows="10" name="action_description"></textarea></form>
<ul>
<li class="list-sourceforge">
<select name="project_list"><option>Seleccionar proyecto</option><option>gtdgears</option><option>kt</option><option>trac</option><option>servers</option></select>
</li>
<li class="list-sourceforge">
<select name="context_list"><option>Seleccionar contexto</option><option>MW</option><option>Lanux</option><option>Personal</option><option>Facultad</option></select>
</li>
<li class="list-sourceforge"> <button type="button" value="Agregar" name="add_action">Agregar</button>
</li>
</ul>
</a></li>
<li class="list-sourceforge"></li>
</div>
<p style="text-align: center;"> <br>
</p>
</a> </p>
</div>
<div style="margin-left: 22px; width: 734px;" id="content"><br>
Next Actions
<table  width="100%">
   <tr><td  width="20%" valign="top">
   <table  width="100%" id="elActions">
   </table>
   </td><td  width="80%" valign="top">
   <div  id="elDescr"></div>
</td></tr>
</table>
<hr style="width: 100%; height: 2px;">
Projects
<hr style="width: 100%; height: 2px;">
Deferred
<hr style="width: 100%; height: 2px;">
SomeDay / Maybe
<hr style="width: 100%; height: 2px;">
</div>
<div id="footer">
SKA // Lanux
</div>
<div id="extra2"><span></span></div>
<div id="extra3"><span></span></div>
<div id="extra4"><span></span></div>
</body></html>
