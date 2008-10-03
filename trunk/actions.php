<?php
header("content-type: text/xml");
require_once("DB.php");

$db =& DB::Connect(  'mysql://root:lanux@localhost/gtdgears', array() );
if (PEAR::isError($db))  { die($db->getMessage()); }

$res = $db->query(  'SELECT * FROM actions' );
?>
<actions id="actions">
<?php
while(  $res->fetchInto( $row ) ) {
?>
<action  id="<?php echo($row[0]); ?>" buc_id="<?php echo($row[1]); ?>"
name="<?php  echo($row[2]); ?>" 
startdate="<?php  echo($row[4]); ?>"  
enddate="<?php  echo($row[4]);?>">

<?php echo($row[3]);  ?>
</action>
<?php
}
?>
</actions>
