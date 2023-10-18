document.addEventListener('DOMContentLoaded', function() {
	const btn = document.getElementById('btn');
	const r1 = ["00","33","66","99","CC","FF"]
	const g1 = ["00","33","66","99","CC","FF"]
	const b1 = ["00","33","66","99","CC","FF"]

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	function escogerColor() {
		let r = getRandomInt(r1.length)
		let g = getRandomInt(g1.length)
		let b = getRandomInt(b1.length)
		let color = "#" + r + g + b;
		return color;
}
	btn.addEventListener('click', function() {
		document.body.style.backgroundColor = escogerColor();
	});
});
