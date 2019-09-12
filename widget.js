class Bar {
    constructor(properties) {
        this.message = properties.message;
        this.position = properties.position;

        const body = document.querySelector('body');
        const bar = document.createElement('div');
        const showBarBtn = document.createElement('button');

        this.addShowBarBtn(showBarBtn, body);
        this.addBar(bar, body)
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

    addBar = (bar, place) => {
        //position bar START
        bar.style.position = 'absolute';
        bar.style.left = '0';
        if (this.position === 'top') {
            bar.style.top = '0';
        } else if (this.position === 'bottom') {
            bar.style.bottom = '0';
        }
        //position bar END
        // bar styles START
        bar.style.boxSizing = "border-box";
        bar.style.width = '100%';
        bar.style.height = '50px';
        bar.style.backgroundColor = '#2c3e50';
        bar.style.fontFamily = 'Arial, sans-serif';
        bar.style.color = '#FFF';
        // bar styles END

        //text element START
        const textEl = document.createElement('span');
        textEl.textContent = this.message;
        //textelemnt END

        //get widgets btn START
        const getWidgetsBtn = document.createElement('button')
        getWidgetsBtn.textContent = 'Get widgets'
        //get widgets btn END

        //close btn START
        const closeBtn = document.createElement('button')
        closeBtn.textContent = 'X'
        //close btn END

        bar.appendChild(textEl);
        bar.appendChild(getWidgetsBtn);
        bar.appendChild(closeBtn);
        place.appendChild(bar);
    }
}