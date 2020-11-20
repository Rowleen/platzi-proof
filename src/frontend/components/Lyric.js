import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaRegTimesCircle } from "react-icons/fa";
import classNames from "classnames";

import "styles/components/lyric.styl";

const Lyric = ({ lyric }) => {
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");
  const formatter = (string) =>
    string ? string.replace(/\n/g, "<br />") : null;

  useEffect(() => {
    setToggle(true);
    document.body.classList.add("no-overflow");

    if (!Object.prototype.hasOwnProperty.call(lyric, "lyrics_body")) {
      setMessage("Wops! we haven't found a lyric for this song");
    }

    document.getElementById("close-lyric").focus();
  }, [lyric]);

  const handleToggleOnClick = () => {
    document.body.classList.remove("no-overflow");
    setToggle(false);
    setMessage("");
  };

  const handleOnPressEnter = (event) =>
    event.keyCode === 13 ? handleToggleOnClick() : null;

  const lyricWrapper = classNames({
    "lyric-wrapper": true,
    "show-lyric-container": toggle,
  });

  const lyricContainer = classNames({
    "lyric-container": true,
    "show-lyric-container": toggle,
  });

  return (
    <article className={lyricWrapper}>
      <div className={lyricContainer}>
        <FaRegTimesCircle
          id="close-lyric"
          className="close-lyric"
          onClick={handleToggleOnClick}
          onKeyDown={handleOnPressEnter}
          aria-label="Close"
          title="Close"
          tabIndex="-1"
        />
        {!message.length ? (
          <div
            className="lyric-body"
            dangerouslySetInnerHTML={{ __html: formatter(lyric.lyrics_body) }}
          />
        ) : (
          <div className="lyric-message">
            {message}{" "}
            <span className="emoji" aria-label="I'm sorry">
              😅
            </span>
          </div>
        )}
      </div>
    </article>
  );
};

Lyric.propTypes = {
  lyric: PropTypes.object,
};

export default Lyric;
