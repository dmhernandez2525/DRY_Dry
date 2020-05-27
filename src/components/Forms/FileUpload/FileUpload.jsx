import React, { useState } from "react";
import axios from "axios";

import "./FileUpload.scss";

const FileUpload = ({
  id,
  disable,
  uploadUrl,
  uploadFileName, // IT IS VERY IMPORTENT THAT THIS IS THE SAME NAME AS THE BACKEND IS EXPECTING
  hasSubmitInput,
  setImageUrl,
  setError,
  label,
  uploadButtonLabel,
  setSuccess,
  className
}) => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleReturnUrl = async response => {
    if (setImageUrl) {
      await setImageUrl(response.data.data.Location);
      setSuccess
        ? await setSuccess(true)
        : alert("The file is successfully uploaded");
    } else {
      await setUrl(response.data.data.Location);
      setSuccess
        ? await setSuccess(true)
        : alert("The file is successfully uploaded");
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(uploadFileName, file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post(uploadUrl, formData, config)
      .then(async response => {
        await handleReturnUrl(response);
      })
      .catch(error => {
        setError ? setError(error) : console.log(error);
      });
  };
  const onChange = e => {
    setFile(e.target.files[0]);
  };

  const handleAutoUpload = e => {
    const autoFile = e.target.files[0];
    const formData = new FormData();
    formData.append(uploadFileName, autoFile);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post(uploadUrl, formData, config)
      .then(async response => {
        await handleReturnUrl(response);
      })
      .catch(error => {
        setError ? setError(error) : console.log(error);
      });
  };

  return (
    <div id={id} className={`dry-fileUpload  ${className}`}>
      {hasSubmitInput ? (
        <form
          className="dry-fileUpload__user-interaction"
          onSubmit={onFormSubmit}
        >
          <p className="dry-fileUpload__label">{label}</p>
          <div className="dry-fileUpload__input-wrapper">
            <input
              className="dry-fileUpload__input"
              type="file"
              name={uploadFileName}
              onChange={onChange}
            />
          </div>

          <button className="dry-fileUpload__button" type="submit">
            {uploadButtonLabel}{" "}
          </button>
        </form>
      ) : (
        <div className="dry-fileUpload__user-interaction">
          <p className="dry-fileUpload__label">{label}</p>
          <div className="dry-fileUpload__input-wrapper">
            <input
              className="dry-fileUpload__input"
              type="file"
              name={uploadFileName}
              onChange={handleAutoUpload}
            />
          </div>
        </div>
      )}
      {setImageUrl ? (
        <div></div>
      ) : (
        <img className="dry-fileUpload__image" src={url} alt="" />
      )}
    </div>
  );
};

FileUpload.defaultProps = {
  id: "",
  uploadUrl: "http://localhost:5000/upload",
  uploadFileName: "myImage",
  hasSubmitInput: true,
  setImageUrl: null,
  setError: null,
  setSuccess: null,
  label: "Please select a file to upload",
  uploadButtonLabel: "Upload",
  disable: false,
  className: ""
};
export default FileUpload;
