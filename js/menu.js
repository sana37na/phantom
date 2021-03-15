'use strict';

var menuBtnComp = {
    //menuボタンコンポーネント
    template: "\n    <div>\n        <div class=\"header__menu__line\">\n            <span></span><span></span><span></span>\n        </div>\n    </div>"
};
new Vue({
    el: '#app',
    data: {
        active: false,
        navi: false
    },
    methods: {
        naviOpen: function naviOpen() {
        this.active = !this.active;
        this.navi = !this.navi;
        }
    },
    components: {
        'menu-btn': menuBtnComp
    }
});