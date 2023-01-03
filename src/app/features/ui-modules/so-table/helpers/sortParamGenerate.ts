export const sortParamGenerate = (sortOrder: number, sortField: string) => sortOrder === -1 ? '-' + sortField : sortField;
