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
    if (Object.prototype.hasOwnProperty.call(lyric, "lyrics_body")) {
      document.body.classList.add("no-overflow");
    } else {
      setMessage("Wops! we haven't found a lyric for this song");
    }
  }, [lyric]);

  const handleToggleOnClick = () => {
    document.body.classList.remove("no-overflow");
    setToggle(false);
  };

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
          className="close-lyric"
          onClick={() => handleToggleOnClick()}
        />
        {!message.length ? (
          <div
            className="lyric-body"
            dangerouslySetInnerHTML={{ __html: formatter(lyric.lyrics_body) }}
          />
        ) : (
          <div className="lyric-message">{message} 😅</div>
        )}
      </div>
    </article>
  );
};

Lyric.propTypes = {
  lyric: PropTypes.object,
};

export default Lyric;
