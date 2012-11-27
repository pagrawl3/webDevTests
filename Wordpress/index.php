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
<?php get_header(); ?>  
  


<div id="blog_content">

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>  

<div class='blog_content'>
<h2 class='ribbon'><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>  

<?php the_content(); ?>  

<p><?php the_time('F j, Y'); ?> at <?php the_time('g:i a'); ?> | <?php the_category(', '); ?> | <?php comments_number('No comment', '1 comment', '% comments'); ?></p>  

<?php endwhile; else: ?>  

<h2>Woops...</h2>  

<p>Sorry, no posts we're found.</p>  
</div>  
<?php endif; ?>  
</div>

<p align="center"><?php posts_nav_link(); ?></p>  


</body>
</html>