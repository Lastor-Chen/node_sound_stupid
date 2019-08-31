// for index page

$('.form-row').on('click', (e) => {
  if (e.target.matches('.img-engineer')) { $('#engineer').prop('checked', true) }
  if (e.target.matches('.img-designer')) { $('#designer').prop('checked', true) }
  if (e.target.matches('.img-entrepreneur')) { $('#entrepreneur').prop('checked', true) }
})