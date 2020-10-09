function extractErrorMessage(ex) {
  const message =
    ex.response && ex.response.data.data
      ? ex.response.data.data.message
      : ex.response.data.message;
  return message;
}

export default {
  extractErrorMessage,
};
