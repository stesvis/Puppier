function extractErrorMessage(ex) {
  if (ex.response && ex.response.data) {
    return ex.response.data.data
      ? ex.response.data.data.message
      : ex.response.data.message;
  }
  return ex;
}

export default {
  extractErrorMessage,
};
