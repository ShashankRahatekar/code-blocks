import {Problem} from '@definitions/problems.types';
import Requestmaker from '../request';

class ProblemsServices {
    static async getProblem(id: string): Promise<Problem> {
        try {
            const result = await Requestmaker.fetchData<Problem>('code/problem/' + id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getProblems(): Promise<Problem[]> {
        try {
            const result = await Requestmaker.fetchData<Problem[]>('code/problem');
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export default ProblemsServices;