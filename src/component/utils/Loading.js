export default class Loading {
    static px = 0;
    static interval;
    static $laoding;
    static standby($loading, isImported) {
        this.$loading = $loading;
        if(!isImported && $loading) {
            this.interval = setInterval(() => {
                this.render();
                this.px++;
            }, 100);
        } else {
            clearInterval(this.interval);
            this.px = 0;
        }
    }
    static render() {
        const { $loading, px } = this;
        $loading.innerHTML = `<hr width="${px}px">`;
    }
}