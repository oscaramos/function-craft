import { remote } from "electron";

export const showErrorMessage = (errorMessage, errorDetail) => {
  const options = {
    type: 'error',
    title: 'Error',
    message: errorMessage,
    detail: errorDetail
  };

  remote.dialog.showMessageBox(null, options)
};
