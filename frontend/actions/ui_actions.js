export const DATE_DROPDOWN_EVENT = "DATE_DROPDOWN_EVENT";
export const RECEIVE_PREVIEW_URL = "RECEIVE_PREVIEW_URL";
export const HIDE_ARROW_EVENT = "HIDE_ARROW_EVENT";
export const ARROW_SEARCH_CLICKED = "ARROW_SEARCH_CLICKED";

export const sendDropdownEvent = event => ({
         type: DATE_DROPDOWN_EVENT,
         event
       });

export const sendPreviewUrl = url => ({
  type: RECEIVE_PREVIEW_URL,
  url
});

export const sendArrowEvent = event => ({
  type: HIDE_ARROW_EVENT,
  event
});

export const arrowSearchClicked = event => ({
  type: ARROW_SEARCH_CLICKED,
  event
});