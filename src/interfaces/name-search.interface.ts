import { IIntroducingBrokerData } from './introducing-broker.interface';
import { IJointInsuredData } from './joint-insured.interface';
import { IManagingBrokerData } from './managing-broker.interface';

export interface INameSearchProps {
    placeholder: string;
    brokerData: { [key: string]: IJointInsuredData | IManagingBrokerData | IIntroducingBrokerData };
    onSelect: (value: string) => void;
    onClear: () => void;
    onCreateNew?: () => void;
    setSearchTermExternally?: string;
    onNameChange?: (value: string) => void;
}
