import * as actions from './Action'

const defaultNum = {
    num: 100
}
const yyy = (xxx = defaultNum, zzz) => {
    if (zzz.type === actions.ACTION) {
        return {
            num: Math.ceil(Math.random() * 100)
        }
    }
    return xxx
}

export default yyy 