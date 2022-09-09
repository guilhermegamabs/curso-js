exports.paginaInicial = (req, res) => {
  /*
  console.log(req.flash('error'), req.flash('success'), req.flash('info'))
  req.flash('info', 'Olá mundo!');
  req.flash('error', 'sfsdhgshs');
  req.flash('success', 'Blaaaaa');
  res.render('index');
  */
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};