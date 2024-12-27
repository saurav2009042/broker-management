import { IBreadcrumbs } from './breadcrumbs.interface';

export interface IQuotationHeaderProps {
    breadcrumbs: IBreadcrumbs;
    title: string;
    onButtonClick: () => void;
}
