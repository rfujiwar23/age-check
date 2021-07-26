var app = new Vue({
    el: '#app',
    data: {
        age: ''
    },
    computed: {
        fare: function() {
            console.log(this.age);
            if (this.age == 'Less than 6') {
                return 0;
            } else if (this.age == '7~12') {
                return 5;
            } else if (this.age == '13~20') {
                return 8;
            } else if (this.age == '20 and up') {
                return 10;
            } else {
                return -1;
            }
        }
    }
});
