/* 
	GET users listing. 
*/
var items=['cat', 'dog', 'mouse', 'weazil', 'bear', 'dolphin'];
exports.users =  function(req, res, next) {
  res.send('respond with a resource');
   res.render('index', {
      channel: 'Express'
    , buffer: items
  });
};
