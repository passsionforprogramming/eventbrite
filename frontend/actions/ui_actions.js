export const DATE_DROPDOWN_EVENT = "DATE_DROPDOWN_EVENT";
export const RECEIVE_PREVIEW_URL = "RECEIVE_PREVIEW_URL";
export const sendDropdownEvent = event => ({
         type: DATE_DROPDOWN_EVENT,
         event
       });

export const sendPreviewUrl = url => ({
  type: RECEIVE_PREVIEW_URL,
  url
});