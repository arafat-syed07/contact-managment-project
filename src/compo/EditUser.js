import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [insta, setInsta] = useState("");
  const [twitter, setTwitter] = useState("");
  const [fb, setFb] = useState("");
  const [gender, setGender] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [occupation, setOccupation] = useState("");
  const [uid, setUid] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
    console.log(
      name,
      mobile,
      email,
      insta,
      twitter,
      fb,
      gender,
      aadhaar,
      occupation,
      uid
    );
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setMobile(response.data.mobile);
    setEmail(response.data.email);
    setInsta(response.data.insta);
    setTwitter(response.data.twitter);
    setFb(response.data.fb);
    setGender(response.data.gender);
    setAadhaar(response.data.aadhaar);
    setOccupation(response.data.occupation);
    setUid(response.data.uid);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        mobile,
        email,
        insta,
        twitter,
        fb,
        gender,
        aadhaar,
        occupation,
        uid,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Phone No</label>
            <div className="control">
              <input
                type="tel"
                id="phone"
                className="input"
                // value={mobile}
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                // onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Instagram</label>
            <div className="control">
              <input
                type="url"
                className="input"
                value={insta}
                onChange={(e) => setInsta(e.target.value)}
                placeholder="instagram"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Twitter</label>
            <div className="control">
              <input
                type="url"
                className="input"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                placeholder="Twitter"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">FaceBook </label>
            <div className="control">
              <input
                type="url"
                className="input"
                value={fb}
                onChange={(e) => setFb(e.target.value)}
                placeholder="Facebook"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                placeholder="gender"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Aadhaar</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value)}
                placeholder="aadhaar"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Occupation</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                placeholder="occupation"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">UID</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={uid}
                // // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                onChange={(e) => setUid(e.target.value)}
                placeholder="uid"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
