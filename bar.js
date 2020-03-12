function Bar({position, message, action} = {}) {
    const element = {
        position,
        message,
        action
    };
    const runAction = () => {
        if (element.action) {
            return element.action.apply(null);
        }
        alert('hello world');
    };
    const applyPosition = () => {
        switch (element.position) {
            case 'top': {
                Object.assign(element.bar.style, {
                    top: '0px',
                    bottom: 'auto',
                    'margin-top': '-48px',
                    'margin-bottom': 'auto'
                });
                break;
            }
            default: {
                Object.assign(element.bar.style, {
                    top: 'auto',
                    bottom: '0px',
                    'margin-top': 'auto',
                    'margin-bottom': '-48px'
                });
            }
        }
    };
    const applyVisibility = (visible) => {
        if (visible) {
            Object.assign(element.bar.style, {
                'margin-top': '0px',
                'margin-bottom': '0px'
            });
        } else {
            applyPosition(element.position);
        }
        element.visible = visible;
    };
    const renderBar = (pos) => {
        element.bar = document.createElement('div');
        element.actionButton = document.createElement('button');
        element.closeButton = document.createElement('button');
        element.text = document.createElement('span');
        element.closeButton.innerText = 'X';
        element.actionButton.innerText = 'Get widgets';
        Object.assign(element.bar.style, {
            'position': 'absolute',
            'height': '48px',
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'background-color': '#373d4c',
            'color': '#fff',
            'font-family': 'sans-serif',
            'width': '100%',
            'overflow': 'hidden',
            'transition': 'margin-top 0.3s ease, margin-bottom 0.3s ease'
        });
        Object.assign(element.actionButton.style, {
            'color': '#fff',
            'background-color': '#ffcc33',
            'margin': '0px 10px',
            'border-radius': '3px',
            'font-size': '14px',
            'outline': 'none',
        });
        Object.assign(element.closeButton.style, {
            'position': 'absolute',
            'right': '16px',
            'background': 'transparent',
            'outline': 'none',
            'border': 'none',
            'color': '#fff'
        });
        element.text.append(document.createTextNode(element.message))
        element.text.append(element.actionButton);
        element.bar.append(element.text);
        element.bar.append(element.closeButton);
        element.closeButton.addEventListener('click', () => this.hide());
        element.actionButton.addEventListener('click', () => runAction());
        applyPosition(element.position);
        document.body.prepend(element.bar);
    }
    renderBar(element.position);
    this.show = () => {
        applyVisibility(true);
    }
    this.hide = () => {
        applyVisibility(false);
    }
    this.toggle = () => {
        if (element.visible) {
            return this.hide();
        }
        return this.show();
    }
}
