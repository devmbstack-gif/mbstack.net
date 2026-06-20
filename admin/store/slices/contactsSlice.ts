import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminApi, type ContactInquiry } from "@/lib/api";

type ContactsState = {
  items: ContactInquiry[];
  loading: boolean;
  error: string;
  updatingId: string | null;
  filter: "all" | "pending" | "contacted" | "closed";
};

const initialState: ContactsState = {
  items: [],
  loading: false,
  error: "",
  updatingId: null,
  filter: "all",
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await adminApi.contacts();
    } catch {
      return rejectWithValue("Failed to load contact inquiries");
    }
  },
);

export const updateContactStatus = createAsyncThunk(
  "contacts/updateStatus",
  async ({ id, status }: { id: string; status: string }) => {
    await adminApi.updateContactStatus(id, status);
    return { id, status };
  },
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContactFilter(state, action: { payload: ContactsState["filter"] }) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload ?? "Failed to load contacts");
      })
      .addCase(updateContactStatus.pending, (state, action) => {
        state.updatingId = action.meta.arg.id;
      })
      .addCase(updateContactStatus.fulfilled, (state, action) => {
        state.updatingId = null;
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: action.payload.status }
            : item,
        );
      })
      .addCase(updateContactStatus.rejected, (state) => {
        state.updatingId = null;
      });
  },
});

export const { setContactFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
