export const generateProductMessagesSuccess = (id: number, title?: string, prefix: string = '', suffix: string = '') => ({
  id,
  severity:'success',
  summary:'Success',
  detail: prefix + ' product ' + title + suffix
});


