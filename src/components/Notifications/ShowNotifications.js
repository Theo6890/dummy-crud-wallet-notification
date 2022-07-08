import React, { useState } from "react";
import { onMessageListener } from "../../firebase";
import Notifications from "./Notifications";
import ReactNotificationComponent from "./ReactNotification";

function ShowNotifications() {
      const [show, setShow] = useState(false);
      const [notification, setNotification] = useState({ title: "", body: "" });

      console.log(show, notification);

      onMessageListener()
        .then((payload) => {
          setShow(true);
          setNotification({
            title: payload.notification.title,
            body: payload.notification.body,
          });
          console.log(payload);
        })
        .catch((err) => console.log("failed: ", err));

      return (
        <div className="app">
          {show ? (
            <ReactNotificationComponent
              title={notification.title}
              body={notification.body}
            />
          ) : (
            <></>
          )}
          <Notifications />
        </div>
      );
}

export default ShowNotifications;