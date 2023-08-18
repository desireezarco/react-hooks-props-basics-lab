import React from "react";


function Links({github, linkedin}) {

  return (
    <div id="links">
        <h3>Links</h3>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;
