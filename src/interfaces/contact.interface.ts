export interface IContactValue {
    name: string;
    email: string; 
};

export interface IContactProps {
    value: IContactValue | undefined;
    availableContacts: Array<IContactValue> | undefined;
    onSelectContact: (newContact: IContactValue) => void;
};