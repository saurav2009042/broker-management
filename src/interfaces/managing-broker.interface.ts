import { IContactValue } from './contact.interface';

export interface IManagingBrokerData {
    name: string;
    address: string;
    country: string;
    contact?: IContactValue;
    availableContacts?: Array<IContactValue>;
    commission?: number;
}
