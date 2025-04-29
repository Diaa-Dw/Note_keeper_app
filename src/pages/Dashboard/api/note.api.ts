import axios from "axios";
import Cookies from "js-cookie";
import { handleAxiosError } from "../../../utils/handleAxiosError";

const API_URL = import.meta.env.VITE_Note_API;

export const createNewNote = async ({
  title,
  content,
}: Omit<Note, "_id" | "createdAt">) => {
  try {
    const token = Cookies.get("jwt");

    const res = await axios.post(
      API_URL,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
    const token = Cookies.get("jwt");

    const res = await axios.get(
      API_URL,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: import.meta.env.VITE_NOTE_LIMIT_PER_PAGE || '15',
          page,
        },
      }
    );

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
    const token = Cookies.get("jwt");

    const res = await axios.delete(`${API_URL}/${noteId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    const token = Cookies.get("jwt");

    const res = await axios.patch(
      `${API_URL}/${noteId}`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
    const token = Cookies.get("jwt");

    const res = await axios.get(`${API_URL}/search`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        query: searchTerm,
        page,
        limit,
      },
    });

    return res.data.data;
  } catch (error: unknown) {
    handleAxiosError(
      error,
      "An unexpected error occurred while updating the note."
    );
  }
};
