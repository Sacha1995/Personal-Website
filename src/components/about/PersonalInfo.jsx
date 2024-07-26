const PersonalInfo = () => {
  return (
    <>
      <h2>PERSONAL INFO</h2>
      <div className="infoGrid">
        <p className="opacity8">First Name:</p>
        <p className="bold">Sacha</p>
        <p className="opacity8">Last Name:</p>
        <p className="bold">Uijlen</p>
        <p className="opacity8">Nationality:</p>
        <p className="bold">Dutch</p>
        <p className="opacity8">Location:</p>
        <p className="bold">Reading, UK</p>
        <img
          src="./profile_photo_bw.jpg"
          alt="portrait of Sacha"
          className="infoImg"
        />
      </div>
    </>
  );
};

export default PersonalInfo;
