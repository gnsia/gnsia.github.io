export default class Loading {
    static px = 0;
    static interval;
    static render($loading, isImported) {
        if(!isImported && $loading) {
            this.interval = setInterval(() => {
                $loading.innerHTML = this.template(++this.px);
            }, 100);
        } else {
            clearInterval(this.interval);
            this.px = 0;
        }
    }
    static template(px) {
        return `<hr width="${px}px">`
    }
}