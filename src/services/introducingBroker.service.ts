import { IIntroducingBrokerData } from '../interfaces';
import { mockIntroducingBrokerDetails } from '../mocks';

export const fetchIntroducingBrokerData = async (): Promise<{ [key: string]: IIntroducingBrokerData }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockIntroducingBrokerDetails);
        }, 500);
    });
};
