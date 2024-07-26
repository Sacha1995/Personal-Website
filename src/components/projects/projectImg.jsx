const ProjectImg = ({ src, title }) => {
  return (
    <div className="imgContainer">
      {/* <svg
        version="1.1"
        id="svg957"
        className="svgScreen fill"
        xmlSpace="preserve" // Changed from xml:space to xmlSpace
        width="682.66669"
        height="682.66669"
        viewBox="0 0 682.66669 682.66669"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs961">
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath971">
            <path d="M 0,512 H 512 V 0 H 0 Z" id="path969" />
          </clipPath>
        </defs>
        <g id="g963" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
          <g id="g965">
            <g id="g967" clipPath="url(#clipPath971)">
              <path
                d="M 497,146.311 H 15 v 276.996 h 482 z"
                style={{
                  fill: "none",
                  strokeWidth: 20,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="path973"
              />
            </g>
          </g>
          <g id="g975" transform="translate(218.0107,88.6934)">
            <path
              d="M 0,0 V 57.617"
              style={{
                fill: "none",
                strokeWidth: 20,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
              id="path977"
            />
          </g>
          <g id="g979" transform="translate(293.9893,146.3105)">
            <path
              d="M 0,0 V -57.617"
              style={{
                fill: "none",
                strokeWidth: 20,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
              id="path981"
            />
          </g>
          <g id="g983" transform="translate(162.4023,88.6934)">
            <path
              d="M 0,0 H 187.195"
              style={{
                fill: "none",
                strokeWidth: 20,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
              id="path985"
            />
          </g>
        </g>
      </svg> */}

      <img src={src} alt={title} className="projectImg borderColour" />
    </div>
  );
};

export default ProjectImg;
