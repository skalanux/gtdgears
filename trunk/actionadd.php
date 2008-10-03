<?php
require_once("DB.php");

$db =& DB::Connect(  'mysql://root:lanux@localhost/gtdgears', array() );
     if (PEAR::isError($db))  { die($db->getMessage()); }

$sth = $db->prepare(  'INSERT INTO actions VALUES ( null, ?, ?,?, ?, NOW(), NOW() )' );
$db->execute( $sth,  array( 2, 1, $_POST['name'], $_POST['description' ] ) );
?>
<html><body>
Thanks for adding this  article.<br/><br/>
Would you like to <a  href="actionform.html">add another</a>?
</body></html>
