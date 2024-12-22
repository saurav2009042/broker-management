import { IJointInsuredData } from '../interfaces';
import { mockJointInsuredDetails } from '../mocks';

export const fetchJointInsuredData = async (): Promise<{ [key: string]: IJointInsuredData }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockJointInsuredDetails);
        }, 500);
    });
};
