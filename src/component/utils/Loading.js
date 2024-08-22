export default class Loading {
    static px = 0;
    static render($loading, isImported) {
        if(!isImported && $loading) {
            setTimeout(() => {
                $loading.innerHTML = this.template(++this.px);
            }, 100);
        } else {
            this.px = 0;
        }
    }
    static template(px) {
        return `<hr width="${px}px">`
    }
}