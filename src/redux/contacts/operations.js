import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../operationsAPI";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("User is not authenticated");
    }

    try {
      const response = (await axios.get("/contacts")).data;
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("User is not authenticated");
    }

    try {
      const response = (await axios.post("/contacts", contact)).data;
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("User is not authenticated");
    }

    try {
      const response = (await axios.delete(`/contacts/${contactId}`)).data;
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("User is not authenticated");
    }

    try {
      const { id, ...updatedFields } = contact;
      const response = (await axios.patch(`/contacts/${id}`, updatedFields))
        .data;
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);