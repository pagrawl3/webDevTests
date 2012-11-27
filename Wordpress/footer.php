<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head profile="http://gmpg.org/xfn/11">  
<title><?php bloginfo('name'); ?> <?php wp_title(); ?></title>  
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />  
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen,projection" />  

<?php wp_head(); ?>  

<script src="jquery-1.7.1.min.js" type="text/javascript"></script>
<script src="blog.js" type="text/javascript"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.18.custom.min.js"></script>
<script src="js/ease.js" type="text/javascript"></script>

</head>  

<body>

<div id='footer'>
<!-- Please leave this line intact -->  
<p>Template design by <a href="http://praths.com">Pratham Agrawal</a><br />  
<!-- you can delete below here -->  

© <?php the_time('Y'); ?> <?php bloginfo('name'); ?><br />  
<a href="<?php bloginfo('rss2_url'); ?>">Grab the feed</a></p>  

</div>  
  

< ?php wp_footer(); ?>  



</body>
</html>