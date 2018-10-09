export const mix = {
    mounted() {
        console.log('siema');
        alert('przepraszam czy ja jestem spóxniony?!');
    },
    created() {
      alert('witam! jestem komunikatem z mixinu :)');
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    beforeCreate() {
        alert('Pierwszy!');
    },
    beforeMount(){
        alert('ja jestem ostatni nie spóxniony')
    },
    data: function () {
        return {
        }
    },
    methods: {
        handleScroll () {
            if ( window.scrollY > 100 ) {
                document.getElementById('hajeden').style.color = 'green';
            }
            if( window.scrollY < 5 ) {
                document.getElementById('hajeden').style.color = 'red';
            }
        },
        showMsg(msg) {
            alert(msg);
        },
        pleaseKukizSingASong() {
            this.setMsgAndInvokeAlert('tato kup');
            this.setMsgAndInvokeAlert('rowerek');
            this.setMsgAndInvokeAlert('taki jak ma');
            this.setMsgAndInvokeAlert('Felek');
            this.setMsgAndInvokeAlert('Basia');
            this.setMsgAndInvokeAlert('i Kacperek!');
        },
        setMsg(msg){
            this.msg = msg;
        },
        setMsgAndInvokeAlert(msg) {
            this.setMsg(msg);
            this.showMsg(msg);
        }
    }
}