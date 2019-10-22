/* creating functions that allow the 
user to upload a text file that will copy the contents
over to the respectuve text area fields
*/
window.onload=function(){
// looks for an event to occur
document.getElementById('text-one').addEventListener('change', getFile);
document.getElementById('text-two').addEventListener('change', getFileTwo);
//adds file content from the sample text one upload and copies it to the sample text one text area
function getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      document.getElementById('text-area-one'),
      input.files[0])
  }
}
//adds file content from the sample text two upload and copies it to the sample text two text area
function getFileTwo(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      document.getElementById('text-area-two'),
      input.files[0])
  }
}
//places the file content
function placeFileContent(target, file) {
	readFileContent(file).then(content => {
  	target.value = content
  }).catch(error => console.log(error))
}
// reads the file content
function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}
}