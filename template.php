<?php
/**
* Override or insert PHPTemplate variables into the templates.
*/
function thacker_preprocess_page(&$vars) {
  // Add per content type pages
  if (isset($vars['node'])) {
    // Add template naming suggestion. It should alway use hyphens.
    // If node type is "custom_news", it will pickup "page-custom-news.tpl.php".
    $vars['template_files'][] = 'page-'. str_replace('_', '-', $vars['node']->type);
  }
}

function thacker_preprocess_node(&$vars) {
  if (in_array($vars['node']->type, array('dt_project','profile'))) {
    $vars['terms'] = FALSE;
  }
}
