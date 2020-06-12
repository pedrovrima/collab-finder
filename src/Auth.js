import React, { useEffect } from "react";
import axios from "axios";

export default function () {
  let getCode = async (code) => {
    try {
      let codeGetter = await axios.post("/github-user", {
        data: { code: code },
      });

    window.sessionStorage.setItem("token", JSON.stringify(codeGetter.data));
    window.location.href = "/collab-app"
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");
    getCode(code);
  });

  return <>Loading</>;
}
