import { IManagingBrokerData } from '../interfaces';
import { mockContactValues, mockManagingBrokerData } from '../mocks';

export const fetchManagingBrokerData = async (): Promise<{ [key: string]: IManagingBrokerData }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockManagingBrokerData);
        }, 500);
    });
};

export const fetchContactValues = async (name: string): Promise<Array<{name: string, email: string}>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockContactValues[name] || [ ]);
        }, 500);
    })
};
