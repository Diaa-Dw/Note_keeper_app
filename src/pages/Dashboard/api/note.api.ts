import axios from "axios";
import { handleAxiosError } from "../../../utils/handleAxiosError";

const API_URL = `${import.meta.env.VITE_API}/api/v1/notes`;

export const createNewNote = async ({
  title,
  content,
}: Omit<Note, "_id" | "createdAt">) => {
  try {
    const res = await axios.post(
      API_URL,
      {
        title,
        content,
      },
      {
        withCredentials: true,
      }
    );

    return res.data.data;
  } catch (error: unknown) {
    handleAxiosError(
      error,
      "An unexpected error occurred while creating the note."
    );
  }
};

export const fetchNotes = async (page = 1) => {
  try {
    const res = await axios.get(API_URL, {
      params: {
        limit: import.meta.env.VITE_NOTE_LIMIT_PER_PAGE || "15",
        page,
      },
      withCredentials: true,
    });

    return res.data.data;
  } catch (error: unknown) {
    handleAxiosError(
      error,
      "An unexpected error occurred while fetching notes."
    );
  }
};

export const deleteNote = async (noteId: string) => {
  try {
    const res = await axios.delete(`${API_URL}/${noteId}`, {
      withCredentials: true,
    });

    return res.data.data;
  } catch (error: unknown) {
    handleAxiosError(
      error,
      "An unexpected error occurred while deleting the note."
    );
  }
};

export const updateNote = async (
  title: string,
  content: string,
  noteId: string
) => {
  try {
    const res = await axios.patch(
      `${API_URL}/${noteId}`,
      {
        title,
        content,
      },
      {
        withCredentials: true,
      }
    );

    return res.data.data;
  } catch (error: unknown) {
    handleAxiosError(
      error,
      "An unexpected error occurred while updating the note."
    );
  }
};

export const searchNotes = async (
  searchTerm: string,
  page: number,
  limit = 15
) => {
  try {
    const res = await axios.get(`${API_URL}/search`, {
      params: {
        query: searchTerm,
        page,
        limit,
      },

      withCredentials: true,
    });

    return res.data.data;
  } catch (error: unknown) {
    handleAxiosError(
      error,
      "An unexpected error occurred while updating the note."
    );
  }
};
