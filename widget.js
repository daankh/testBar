class Bar {
    constructor(properties) {
        this.message = properties.message;
        this.position = properties.position;

        const body = document.querySelector('body');
        const bar = document.createElement('div');
        const showBarBtn = document.createElement('button');

        this.addShowBarBtn(showBarBtn, body);
    }

    addShowBarBtn(showBarBtn, place) {
        showBarBtn.textContent = 'Show Bar';
        //Center button start
        showBarBtn.style.position = 'absolute';
        showBarBtn.style.left = '50%';
        showBarBtn.style.top = '50%';
        showBarBtn.style.transform = 'translate(=50%,-50%)';
        //Center button end
        //Button styles start
        showBarBtn.style.width = '80px';
        showBarBtn.style.height = '80px';
        showBarBtn.style.color = "#000";
        showBarBtn.style.backgroundColor = "#fff"
        showBarBtn.style.outline = 'none';
        showBarBtn.style.border = "4px solid #888"
        showBarBtn.style.borderRadius = "50%"
        showBarBtn.style.cursor = "pointer";
        //Button styles end

        place.appendChild(showBarBtn);
    }
}