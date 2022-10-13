

/* # a_b */
let windowWH = document.querySelector('.window-properties')
setInterval(() => {
  let width  = window.innerWidth || document.documentElement.clientWidth || 
  document.body.clientWidth;
  let height = window.innerHeight|| document.documentElement.clientHeight|| 
  document.body.clientHeight;
  windowWH.innerHTML = `${width}, ${height}`
, 1})
