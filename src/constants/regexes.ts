export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const usernameRegex = /^[a-zA-Z0-9]+$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const urlRegex =
  /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
export const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
export const timeRegex = /^\d{2}:\d{2}$/;
export const datetimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
