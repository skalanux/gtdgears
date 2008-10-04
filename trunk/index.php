<?
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en"><head>
<meta content="text/html; charset=UTF-8" http-equiv="content-type"><title>gtdgears</title>
<script  type="text/javascript"  src="gears_init.js"></script>
<script  type="text/javascript" src="prototype.js"></script>

<!-- <link rel="shortcut icon" type="image/x-icon" href="http://www.kompozer.net/favicon.ico"> -->
<link rel="stylesheet" href="gtdgears_files/style.css" type="text/css">
<script>
     var db;

function getActions(context){
    //Revisar porque aun estando online me toma la base de abajo
    if (getCookie("offlinemode")){
       showActions(context);
    }
    else{
         new Ajax.Request( 'actions.php?con='+context, { method:  'get',
           onSuccess: function( transport ) {
         var actionTags;
        actionTags =  transport.responseXML.documentElement.getElementsByTagName( 'action' );
     
        for( var a = 0; a < actionTags.length;  a++ ) {
           
            aid=parseInt( actionTags[a].getAttribute('id'));
            abid=parseInt(  actionTags[a].getAttribute('buc_id') );
            acid=parseInt(  actionTags[a].getAttribute('ctxt_id') );
            aname=actionTags[a].getAttribute('name'); 
            astartdate=actionTags[a].getAttribute('start_date');
            aenddate=actionTags[a].getAttribute('end_date');
            adesc=actionTags[a].firstChild.nodeValue;
            sync(aid, abid, acid, aname, adesc, astartdate,aenddate);
        }
    
       showActions(context);
     } } );
     
    }
    }

function sync(aid, abid, acid, aname, adesc, astartdate,aenddate){
           addAction(aid, abid, acid, aname, adesc, astartdate,aenddate);
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
     //showActions();
     }

function showAction( id  )
     {
     var rs = db.execute( 'select act_descr from actions where act_id = ?', [ id ] );

     var found = 0;
     while (rs.isValidRow()) {  $('elDescr_na').innerHTML = rs.field(0); rs.next(); }
     rs.close();
     }

function showActions(ctxt_id)
     {
     while( $('elActions_na').rows.length > 0 )
      $('elActions_na').deleteRow( -1 );

  var rs = db.execute( 'select * from actions where act_ctxt_id='+ctxt_id );

     while (rs.isValidRow())
     {  
       var elTR =  $('elActions_na').insertRow( -1 );
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

function setCookie( name, value, expires, path, domain, secure ) {
    var today = new Date();
    today.setTime( today.getTime() );
    if ( expires ) {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date( today.getTime() + (expires) );
    document.cookie = name+'='+escape( value ) +
        ( ( expires ) ? ';expires='+expires_date.toGMTString() : '' ) + //expires.toGMTString()
        ( ( path ) ? ';path=' + path : '' ) +
        ( ( domain ) ? ';domain=' + domain : '' ) +
        ( ( secure ) ? ';secure' : '' );
}
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=");
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1; 
    c_end=document.cookie.indexOf(";",c_start);
    if (c_end==-1) c_end=document.cookie.length;
    return unescape(document.cookie.substring(c_start,c_end));
    } 
  }
return "";
}

function setOffline(){
setCookie( 'offlinemode', '1', '', '/', '', '' );
}

function setOnline(){
setCookie( 'offlinemode', '0', '', '/', '', '' );
}



   </script>

</head>
<body  onload="initializedb()">
<div style="height: 27px;" id="header">
<a href="javascript:setOnline();">online</a>
<a href="javascript:setOffline();">offline</a>
</div>
<div id="menu1">
<ul>
<li> <a class="" href="javascript:void  getActions(1);">Personal</a>
</li>
<li>
<a href="javascript:void  getActions(2);">MW</a>
</li>
<li> <a class="" href="javascript:void  getActions(3);">Lanux</a>
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
   <table  width="100%" id="elActions_na">
   </table>
   </td><td  width="80%" valign="top">
   <div  id="elDescr_na"></div>
</td></tr>
</table>
<hr style="width: 100%; height: 2px;">
Projects
<table  width="100%">
   <tr><td  width="20%" valign="top">
   <table  width="100%" id="elActions_pro">
   </table>
   </td><td  width="80%" valign="top">
   <div  id="elDescr_pro"></div>
</td></tr>
</table>

<hr style="width: 100%; height: 2px;">
Deferred
<hr style="width: 100%; height: 2px;">
<table  width="100%">
   <tr><td  width="20%" valign="top">
   <table  width="100%" id="elActions_def">
   </table>
   </td><td  width="80%" valign="top">
   <div  id="elDescr_def"></div>
</td></tr>
</table>

SomeDay / Maybe
<hr style="width: 100%; height: 2px;">
<table  width="100%">
   <tr><td  width="20%" valign="top">
   <table  width="100%" id="elActions_may">
   </table>
   </td><td  width="80%" valign="top">
   <div  id="elDescr_may"></div>
</td></tr>
</table>
</div>
<div id="footer">
SKA // Lanux
</div>
<div id="extra2"><span></span></div>
<div id="extra3"><span></span></div>
<div id="extra4"><span></span></div>
</body></html>
