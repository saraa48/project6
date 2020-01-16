export default {
  save,
  load
};

function save(key, val) {
  val = JSON.stringify(val);
  localStorage.setItem(key, val);
}

function load(key) {
  return JSON.parse(localStorage.getItem(key));
}
