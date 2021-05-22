
async function getPosts() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = await response.json();

	const res = posts.map( post => (`<li>${post.title}</li>`))
	document.getElementById('posts').innerHTML = res
}

 function init() {
		getPosts()
}

init()