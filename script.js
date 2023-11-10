const input_area = document.querySelector("textarea");
const formated_area = document.querySelector(".formated");
const bold_btn = document.querySelector(".btn-bold");
const italic_btn = document.querySelector(".btn-italic");
const underline_btn = document.querySelector(".btn-underline");
const btn_left = document.querySelector(".btn-left");
const btn_right = document.querySelector(".btn-right");
const btn_justify = document.querySelector(".btn-justify");
const btn_center = document.querySelector(".btn-center");

// press enter to add text what u write
input_area.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		console.log(input_area.value);
		const p = document.createElement("p");
		p.textContent = input_area.value;

		formated_area.appendChild(p);
		input_area.value = "";
	}
});

bold_btn.addEventListener("click", makeBold);
italic_btn.addEventListener("click", makeItalc);
underline_btn.addEventListener("click", makeUnderLine);

btn_left.addEventListener("click", () => {
	formated_area.style.textAlign = "left";
});
btn_right.addEventListener("click", () => {
	formated_area.style.textAlign = "right";
});
btn_justify.addEventListener("click", () => {
	formated_area.style.textAlign = "justify";
});
btn_center.addEventListener("click", () => {
	formated_area.style.textAlign = "center";
});

function makeBold() {
	formated_area.classList.toggle("makeBold");
}
function makeItalc() {
	formated_area.classList.toggle("makeItalic");
}
function makeUnderLine() {
	formated_area.classList.toggle("makeUnderline");
}
