import { IContactValue, IManagingBrokerData } from "../interfaces";

export const mockManagingBrokerData: { [key: string]: IManagingBrokerData } = {
    'Harry Potter': {
        name: 'Harry Potter',
        address: '123 Main St, Ohio',
        country: 'USA',
        contact: {
            name: 'Albus Dumbledore',
            email: 'albus.dumbledore@gmail.com',
        },
        commission: undefined,
        availableContacts: [
            {
                name: 'Albus Dumbledore',
                email: 'albus.dumbledore@gmail.com',
            },
            {
                name: 'Severus Snape',
                email: 'severus.snape@gmail.com',
            },
        ],
    },
    'Hermoine Granger': {
        name: 'Hermoine Granger',
        address: '456 Oak Ave',
        country: 'Canada',
        contact: {
            name: 'Minerva McGonagall',
            email: 'minerva.mcgonagall@gmail.com',
        },
        commission: undefined,
        availableContacts: [
            {
                name: 'Minerva McGonagall',
                email: 'minerva.mcgonagall@gmail.com',
            },
            {
                name: 'Severus Snape',
                email: 'severus.snape@gmail.com',
            },
        ],
    },
    'Ron Weasley': {
        name: 'Ron Weasley',
        address: '789 Pine Rd',
        country: 'UK',
        contact: {
            name: 'Filius Flitwick',
            email: 'filius.flitwick@gmail.com',
        },
        commission: undefined,
        availableContacts: [
            {
                name: 'Albus Dumbledore',
                email: 'albus.dumbledore@gmail.com',
            },
            {
                name: 'Filius Flitwick',
                email: 'filius.flitwick@gmail.com',
            },
            {
                name: 'Severus Snape',
                email: 'severus.snape@gmail.com',
            },
        ],
    },
    'Ginny Weasley': {
        name: 'Ginny Weasley',
        address: '101 Maple Dr',
        country: 'Australia',
        contact: {
            name: 'Albus Dumbledore',
            email: 'albus.dumbledore@gmail.com',
        },
        commission: 20,
        availableContacts: [
            {
                name: 'Horace Slughorn',
                email: 'horace.slughorn@microsoft.com',
            },
            {
                name: 'Rubeus Hagrid',
                email: 'rubeus.hagrid@microsoft.com',
            },
            {
                name: 'Albus Dumbledore',
                email: 'albus.dumbledore@gmail.com',
            },
        ],
    },
    'Neville Longbottom': {
        name: 'Neville Longbottom',
        address: '202 Birch Ln',
        country: 'New Zealand',
        contact: {
            name: 'Gilderoy Lockhart',
            email: 'gilderoy.lockhart@hotmail.com',
        },
        commission: 30,
        availableContacts: [
            {
                name: 'Remus Lupin',
                email: 'remus.lupin@hotmail.com',
            },
            {
                name: 'Alastor Moody',
                email: 'madeyemoody@gmail.com',
            },
            {
                name: 'Albus Dumbledore',
                email: 'albus.dumbledore@gmail.com',
            },
            {
                name: 'Gilderoy Lockhart',
                email: 'gilderoy.lockhart@hotmail.com',
            },
        ],
    },
};

export const mockContactValues: { [key: string]: Array<IContactValue> } = {
    'New Legal Entity 1': [
        {
            name: 'Sirius Black',
            email: 'iescapedazkaban@microsoft.com',
        },
        {
            name: 'Luna Lovegood',
            email: 'iseenargles@gmail.com',
        }
    ],
};