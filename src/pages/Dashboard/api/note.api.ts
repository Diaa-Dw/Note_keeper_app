import axios from "axios";
import { catchAsync } from "../../../utils/catchAsync";

const API_URL = `${import.meta.env.VITE_API}/api/v1/notes`;

const sendCreateNoteRequest = async ({
  title,
  content,
}: Omit<Note, "_id" | "createdAt">): Promise<Note> => {
  const res = await axios.post(
    API_URL,
    { title, content },
    { withCredentials: true }
  );
  return res.data.data;
};

const sendGetNotesRequest = async (page = 1): Promise<NotesResponse> => {
  const res = await axios.get(API_URL, {
    params: {
      limit: import.meta.env.VITE_NOTE_LIMIT_PER_PAGE || "15",
      page,
    },
    withCredentials: true,
  });
  return res.data.data;
};

const sendRemoveNoteRequest = async (noteId: string): Promise<Note> => {
  const res = await axios.delete(`${API_URL}/${noteId}`, {
    withCredentials: true,
  });
  return res.data.data;
};

const sendEditNoteRequest = async (
  title: string,
  content: string,
  noteId: string
): Promise<Note> => {
  const res = await axios.patch(
    `${API_URL}/${noteId}`,
    { title, content },
    { withCredentials: true }
  );
  return res.data.data;
};

const sendFindNotesRequest = async (
  searchTerm: string,
  page: number,
  limit = 15
): Promise<NotesResponse> => {
  const res = await axios.get(`${API_URL}/search`, {
    params: {
      query: searchTerm,
      page,
      limit,
    },
    withCredentials: true,
  });
  return res.data.data;
};

export const createNewNoteRequest = catchAsync(
  sendCreateNoteRequest,
  "An unexpected error occurred while creating the note."
);

export const fetchNotesRequest = catchAsync(
  sendGetNotesRequest,
  "An unexpected error occurred while fetching notes."
);

export const deleteNoteRequest = catchAsync(
  sendRemoveNoteRequest,
  "An unexpected error occurred while deleting the note."
);

export const updateNoteRequest = catchAsync(
  sendEditNoteRequest,
  "An unexpected error occurred while updating the note."
);

export const searchNotesRequest = catchAsync(
  sendFindNotesRequest,
  "An unexpected error occurred while searching notes."
);
