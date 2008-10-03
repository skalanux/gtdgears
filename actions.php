<?php
header("content-type: text/xml");
require_once("DB.php");

$db =& DB::Connect(  'mysql://root:lanux@localhost/gtdgears', array() );
if (PEAR::isError($db))  { die($db->getMessage()); }

$query = "SELECT * FROM actions where act_ctxt_id=".$_GET["con"];
$res = $db->query( $query );
?>
<actions id="actions">
<?php
while(  $res->fetchInto( $row ) ) {
?>
<action  id="<?php echo($row[0]);?>" buc_id="<?php echo($row[1]);?>"  ctxt_id="<?php echo($row[2]);?>" name="<?php  echo($row[3]);?>" startdate="<?php  echo($row[5]); ?>" enddate="<?php  echo($row[6]);?>"><?php echo($row[4]);?></action>
<?php
}
?>
</actions>
