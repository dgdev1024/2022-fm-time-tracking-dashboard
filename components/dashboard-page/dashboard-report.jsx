/**
 * @file components/dashboard-page/dashboard-report.jsx
 */

import { useState, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Styles from "./dashboard-report.module.css";

export default function DashboardReport({ user }) {
  const fileInputRef = useRef(null);
  const [displayName, setDisplayName] = useState(user.name || "");
  const [profilePicture, setProfilePicture] = useState(user.image || "");
  const [isEditingName, setEditingName] = useState(!user.name);
  const [isSubmittingName, setSubmittingName] = useState(false);
  const [isSubmittingProfilePicture, setSubmittingProfilePicture] =
    useState(false);

  const onFileInputChanged = async (ev) => {
    console.log(ev.target.files);
    if (ev.target.files[0]) {
      setSubmittingProfilePicture(true);
      try {
        const formData = new FormData();
        formData.append("imageFile", ev.target.files[0]);

        const res = await fetch("/api/set-profile-picture", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        setProfilePicture(data.image.url);
      } catch (err) {
        console.error(err);
      }
      setSubmittingProfilePicture(false);
    }
  };

  const onProfilePictureClick = () => {
    fileInputRef.current.click();
  };

  const onNameEditFormSubmit = async (ev) => {
    ev.preventDefault();
    setSubmittingName(true);

    try {
      const res = await fetch("/api/set-account-name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: displayName }),
      });
      const { name } = await res.json();

      setDisplayName(name);
      setEditingName(false);
    } catch (err) {
      console.error(err);
    }

    setSubmittingName(false);
  };

  return (
    <div className={Styles.dashboardReport}>
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileInputRef}
        onChange={onFileInputChanged}
        accept="image/png, image/gif, image/jpeg"
      />
      <div className={Styles.dashboardProfile}>
        <button
          className={Styles.dashboardAvatar}
          aria-label="Click to set your profile picture."
          title="Click to set your profile picture."
          onClick={onProfilePictureClick}
          disabled={isSubmittingProfilePicture}
        >
          {profilePicture ? (
            <Image src={profilePicture} alt="User Avatar" layout="fill" />
          ) : (
            <Fa icon={faPlus} />
          )}
        </button>
        <span className={Styles.dashboardFor}>
          Report for
          <br />
          {isEditingName === false ? (
            <span
              className={Styles.dashboardName}
              onClick={() => setEditingName(true)}
              title="Click to edit your name."
            >
              {displayName}
            </span>
          ) : (
            <form
              className={Styles.dashboardNameForm}
              onSubmit={onNameEditFormSubmit}
            >
              <input
                className={`${Styles.dashboardNameInput}`}
                type="text"
                name="name"
                id="name"
                disabled={isSubmittingName}
                aria-label="Enter Your Name"
                placeholder="Enter Your Name"
                value={displayName}
                onChange={(ev) => setDisplayName(ev.target.value)}
                required
              />
            </form>
          )}
        </span>
      </div>
      <div className={Styles.dashboardControl}></div>
    </div>
  );
}
