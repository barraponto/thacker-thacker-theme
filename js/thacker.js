Drupal.behaviors.thackerExposedform = function (context) {
  var $form = $('#views-exposed-form-dt-project-page-page-1, #views-exposed-form-user-page-page-1', context);
  $form.addClass('js-processed');
  $form.find('.views-exposed-widget').filter(
      // get only the widgets that have a text input
      function() {
        return $(this).find('input:text').length == 1;
      }).each(
        function() {
        // get input and label elements
        var $input = $(this).find('input');
        var $label = $(this).find('label');
        var labeltext = $label.text().trim();

        // first of all, hide the labels
        $label.hide();

        // set the html5 placeholders
        $input.attr('placeholder', labeltext);

        });
  $form.find('.views-exposed-widget').filter(
    // get only the widgets that have a select input 
    function() {
      return $(this).find('select').length == 1;
    }).each(
      function() {
        // get input and label elements
        var $input = $(this).find('option[selected]');
        var $label = $(this).find('label');
        var labeltext = $label.text().trim();

        // first of all, hide the labels
        $label.hide();

        // if the default value is All, use the label
        if ($input.val() == 'All') {
          $input.text(labeltext);
        }});
}
