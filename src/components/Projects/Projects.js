import React from "react";
import "./Projects.scss";
import parking from "../../assets/parking.jpeg";

export default function Projects() {
  return (
    <div className="project">
      <p className="project__melwa">Projects</p>
      <div className="project__info">
        <div className="project__more">
          <img
            className="project__image"
            alt="Image of a paring"
            src={parking}
          />
          <h2 className="project__name">Attendee</h2>
          <p className="project__details">
            An single website that helps the parking lot owners to manage all the
            parkings available in their lot.
          </p>
          <button className="project__button">
            <a
              className="project__link"
              target="_blank"
              href="NipunaGamage888/nipuna-gamage-capstone-attendee"
            >
              View in GitHub
            </a>
          </button>
        </div>
        <div className="project__more">
          <img
            className="project__image"
            alt="Image of a paring"
            src={parking}
          />
          <h2 className="project__name">BrainFlix</h2>
          <p className="project__details">
            A Demo Website simillar to Youtube which allows the users to search
            and watch movies in the site.
          </p>
          <button className="project__button">
            <a
              className="project__link"
              target="_blank"
              href="https://github.com/NipunaGamage888/nipuna-gamage-brainflix"
            >
              View in GitHub
            </a>
          </button>
        </div>
        <div className="project__more">
          <img
            className="project__image"
            alt="Image of a paring"
            src={parking}
          />
          <h2 className="project__name">Parking Genie</h2>
          <p className="project__details">
            An single website that helps people to search and book parking
            spaces
          </p>
          <button className="project__button">
            <a
              className="project__link"
              target="_blank"
              href="https://github.com/NipunaGamage888/nipuna-gamage-capstone"
            >
              View in GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
