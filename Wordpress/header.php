<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head profile="http://gmpg.org/xfn/11">  
<title><?php bloginfo('name'); ?> <?php wp_title(); ?></title>  
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />  
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen,projection" />  

<?php wp_head(); ?>  

<script src="jquery-1.7.1.min.js" type="text/javascript"></script>

<script type="text/javascript" src="js/jquery-ui-1.8.18.custom.min.js"></script>
<script src="js/ease.js" type="text/javascript"></script>

</head>  

<body>

<div id='header'>

<a href="<?php echo get_option('home'); ?>/">
<div id='icon'>
<div id="icon_art"><img src="wp-content\themes\Wordpress\soon_art.png" alt="" />	</div>
<div id="icon_ban"><img src="wp-content\themes\Wordpress\soon_mtext.png" alt="" /></div>
<div id="icon_txt" class="mfont"><p>EPILOGUE</p></div>
</a>
</div>

<div id='button1'>
<p>
<?php wp_list_pages('sort_column=menu_order&title_li='); ?>
</p>
</div>

</div>



</body>
</html>