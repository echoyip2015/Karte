var $ = (typeof window.jQuery !== 'undefined') && window.jQuery;

export default class ReactMountor {
    static getProps(Selector) {
        var props = null;
        if ($) {
            props = $(Selector).attr('data-react-props');
        }
        else {
            props = document.querySelector(Selector).getAttribute('data-react-props');
        }
        if (props != null) {
            props = JSON.parse(props);
        }
        return props;
    }

    static mountComponents(Selector) {
        var nodes = null;
    }
}