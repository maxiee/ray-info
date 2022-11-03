import {init} from '../../service/dbtable';

const actions = {
    async initDB() {
        await init();
    }
}

export default {
    actions
}