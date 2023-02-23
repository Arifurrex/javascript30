const inputs = document.querySelectorAll('input');
console.log(inputs);

function handler(){
    console.log(this.value);
    const suffix = this.dataset.sazing || '';
    console.log(suffix);
    console.log(this.name);

    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(i => {i.addEventListener('change',handler)});
inputs.forEach(i => {i.addEventListener('mousemove',handler)});