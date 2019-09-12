class Bar {
    constructor(properties) {
        if (!properties.message || !properties.position) {
            throw new Error('Bar initialization needs a object with message and position property');
        }

        if (properties.position !== 'top' && properties.position !== 'bottom') {
            throw new Error('Bar position must be top or bottom');
        }

        this.message = properties.message;
        this.position = properties.position;

        this.body = document.querySelector('body');
        this.bar = document.createElement('div');
        this.showBarBtn = document.createElement('button');

        this.addShowBarBtn(this.showBarBtn, this.body);
        this.addBar(this.bar, this.body)
    }

    addShowBarBtn(showBarBtn, place) {
        showBarBtn.textContent = 'Show Bar';
        //Center button start
        showBarBtn.style.position = 'absolute';
        showBarBtn.style.left = '50%';
        showBarBtn.style.top = '50%';
        showBarBtn.style.transform = 'translate(-50%,-50%)';
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

        showBarBtn.addEventListener('click', this.showBar)

        place.appendChild(showBarBtn);
    }

    addBar = (bar, place) => {
        const barHeight = 50;
        //position bar START
        bar.style.position = 'fixed';
        bar.style.left = '0';
        if (this.position === 'top') {
            bar.style.top = `${-barHeight}px`;
        } else if (this.position === 'bottom') {
            bar.style.bottom = `${-barHeight}px`;
        }
        //position bar END
        // bar styles START
        const barPadding = '4vw';
        bar.style.padding = `0 ${barPadding}`;
        bar.style.boxSizing = "border-box";
        bar.style.width = '100%';
        bar.style.height = `${barHeight}px`;
        bar.style.backgroundColor = '#2c3e50';
        bar.style.fontFamily = 'Arial, sans-serif';
        bar.style.color = '#FFF';
        bar.style.display = "flex";
        bar.style.alignItems = "center";
        bar.style.justifyContent = "center";

        bar.style.transition = 'top .3s, bottom .3s';
        // bar styles END

        //text element START
        const textEl = document.createElement('span');
        textEl.textContent = this.message;
        //text element END

        //get widgets btn START
        const getWidgetsBtn = document.createElement('button')
        getWidgetsBtn.textContent = 'Get widgets';
        getWidgetsBtn.style.color = 'inherit';
        getWidgetsBtn.style.backgroundColor = '#f39c12';
        getWidgetsBtn.style.outline = 'none';
        getWidgetsBtn.style.border = 'none';
        getWidgetsBtn.style.borderRadius = '4px';
        getWidgetsBtn.style.padding = '.5em 1em';
        getWidgetsBtn.style.cursor = 'pointer';
        getWidgetsBtn.style.margin = " 0 1em";

        // customizable callback function
        getWidgetsBtn.addEventListener('click', () => this.showMessage())
        //get widgets btn END

        //close btn START
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'X';
        closeBtn.style.outline = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.color = 'inherit';
        closeBtn.style.backgroundColor = 'transparent';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.position = 'absolute';
        closeBtn.style.right = `${barPadding}`

        closeBtn.addEventListener('click', () => this.hideBar(barHeight))
        //close btn END

        bar.appendChild(textEl);
        bar.appendChild(getWidgetsBtn);
        bar.appendChild(closeBtn);
        place.appendChild(bar);
    }

    showBar = () => {
        if (this.position === 'top') {
            this.bar.style.top = '0';
        } else {
            this.bar.style.bottom = '0';
        }
    }

    hideBar = (barHeight) => {
        if (this.position === 'top') {
            this.bar.style.top = `${-barHeight}px`;
        } else {
            this.bar.style.bottom = `${-barHeight}px`;
        }
    }

    showMessage = (callback = () => window.alert('hello world')) => {
        return callback()
    }
}