import axios from 'axios';
import queryString from 'query-string';
import { PersonalInterface, PersonalGetQueryInterface } from 'interfaces/personal';
import { GetQueryInterface } from '../../interfaces';

export const getPersonals = async (query?: PersonalGetQueryInterface) => {
  const response = await axios.get(`/api/personals${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createPersonal = async (personal: PersonalInterface) => {
  const response = await axios.post('/api/personals', personal);
  return response.data;
};

export const updatePersonalById = async (id: string, personal: PersonalInterface) => {
  const response = await axios.put(`/api/personals/${id}`, personal);
  return response.data;
};

export const getPersonalById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/personals/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePersonalById = async (id: string) => {
  const response = await axios.delete(`/api/personals/${id}`);
  return response.data;
};
