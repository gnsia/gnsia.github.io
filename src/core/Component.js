import { observe } from "./observer.js";

export default class Component {
    $el;
    state;
    props;
    constructor($el, props) {
        this.$el = $el;
        this.props = props;
        this.setup();
    }
    setup() {
        observe(() => {
            this.render();
            this.setEvent();
            this.dynamicImport();
            this.mounted();
        })
    }
    setEvent() { }
    render() { this.$el.innerHTML = this.template(); }
    template() { return ``; }
    mounted() { }
    dynamicImport() { }
}