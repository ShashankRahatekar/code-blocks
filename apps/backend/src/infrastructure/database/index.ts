import type {Problem} from '@definitions/problems.types';

import data from '../../../utils/leetcode.json';

class DbInit {
    static getAll(): Array<Problem> {
        return data;
    }

    static find(key: string): Problem | undefined {
        return data.find(item => item.id === key);
    }

    static filter(cb: any): Array<Problem> {
        return data.filter(cb);
    }
}

export default DbInit;
