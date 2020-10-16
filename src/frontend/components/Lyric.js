import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaRegTimesCircle } from "react-icons/fa";
import classNames from "classnames";

import "styles/components/lyric.styl";

const Lyric = ({ lyric }) => {
  const [toggle, setToggle] = useState(false);

  const formatter = (string) =>
    string ? string.replace(/\n/g, "<br />") : null;

  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(lyric, "lyrics_body")) {
      const body = document.getElementById("body");
      body.classList.add("no-overflow");
      setToggle(true);
    }
  }, [lyric]);

  const handleToggleOnClick = () => {
    const body = document.getElementById("body");
    body.classList.remove("no-overflow");
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
        <div
          className="lyric-body"
          dangerouslySetInnerHTML={{ __html: formatter(lyric.lyrics_body) }}
        />
      </div>
    </article>
  );
};

Lyric.propTypes = {
  lyric: PropTypes.object,
};

export default Lyric;
