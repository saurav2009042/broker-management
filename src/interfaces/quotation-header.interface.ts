import { IBreadcrumbs } from './breadcrumbs.interface';

export interface IQuotationHeader {
    breadcrumbs: IBreadcrumbs;
    title: string;
    buttonText: string;
    onButtonClick: () => void;
}
