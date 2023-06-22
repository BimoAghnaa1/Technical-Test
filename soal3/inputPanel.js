const app = new Vue({
    el: '#app',

    data: {
        users: [{ form1: '', form2: '' }],
        items: [
            'Age',
            'Education',
            'Interest',
            'Language',
            'Marital Status',
            'Skill'
        ],
    },
    methods: {
        //menambah form
        addRow: function () {
            this.users.push({ form1: '', form2: '' })
        },
        //menghapus form
        deleteRow(index) {
            this.users.splice(index, 1);
        }
    }
})