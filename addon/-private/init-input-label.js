function initInputLabel (input) {
  let $input =  input.$(input.element);
  let $label = $input.siblings ('label');
  $label.attr ('for', input.elementId);
}

export default initInputLabel;

