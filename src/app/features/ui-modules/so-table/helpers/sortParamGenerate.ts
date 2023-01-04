export const sortParamGenerate = (sortOrder: number = 1, sortField: string = ''): string => sortOrder === -1 ? '-' + sortField : sortField;
