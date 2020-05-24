import { ensureHasProtocol } from '~/utilities/string/checkProtocol';
import { v4 } from 'uuid';

export const getCertificateObject = ({ name, link, date, description }) => {
  return {
    id: v4(),
    name: name,
    link: link ? ensureHasProtocol(link) : link,
    date: date,
    description: description,
    hidden: false,
    isDeleted: false,
    deletedOn: '1970-01-01T00:00:00.000Z',
  };
};
