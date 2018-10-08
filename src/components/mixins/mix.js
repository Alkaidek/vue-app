export const mix = {
    data() {
    },
    methods: {
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