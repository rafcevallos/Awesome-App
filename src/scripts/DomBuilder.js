// Modules need to be exported

const DomBuilder = (what, where) => {
  document.querySelector(where).appendChild(what)
}

module.exports = DomBuilder
// acts as a return statement for the module
// exporting a function reference
