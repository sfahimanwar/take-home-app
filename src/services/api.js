// services/api.js
import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = 'https://verbit-karaoke-assignment.vercel.app/api';

const fetchTranscripts = async () => {
  const response = await fetch(`${API_BASE_URL}/transcripts`);
  return response.json();
};

const fetchTranscriptById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/transcripts/${id}`);
  return response.json();
};

const fetchRandomTranscript = async () => {
  const response = await fetch(`${API_BASE_URL}/transcripts/random`);
  return response.json();
};

export const useTranscripts = () => useQuery(['transcripts'], fetchTranscripts);
export const useTranscriptById = (id) => useQuery(['transcript', id], () => fetchTranscriptById(id));
export const useRandomTranscript = () => useQuery(['transcripts'], fetchRandomTranscript);
