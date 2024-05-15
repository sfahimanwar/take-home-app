// services/api.js
import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = 'https://verbit-karaoke-assignment.vercel.app/api';

const fetchTranscripts = async () => {
  const response = await fetch(`${API_BASE_URL}/transcripts`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const fetchTranscriptById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/transcripts/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const fetchRandomTranscript = async () => {
  const response = await fetch(`${API_BASE_URL}/transcripts/random`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useTranscripts = () => useQuery({ queryKey: ['transcripts'], queryFn: fetchTranscripts });
export const useTranscriptById = (id) => useQuery({ queryKey: ['transcript', id], queryFn: () => fetchTranscriptById(id) });
export const useRandomTranscript = () => useQuery({ queryKey: ['transcripts'], queryFn: fetchRandomTranscript });

