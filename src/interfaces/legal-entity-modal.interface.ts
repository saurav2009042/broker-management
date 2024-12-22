import { IManagingBrokerData } from './managing-broker.interface';

export interface ICreateOrEditEntityModalProps {
    isOpen: boolean;
    onClose: () => void;
    managingBrokerData: { [key: string]: IManagingBrokerData };
    addManagingBroker: (newBroker: IManagingBrokerData) => void;
    initialLegalName: string;
}
