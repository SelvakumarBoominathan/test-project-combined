import { useState } from "react";

const ReactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    gender: "",
    languages: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "languages") {
      // const options = e.target.options;
      // const selectedLanguages = [];
      // for (let i = 0; i < options.length; i++) {
      //   if (options[i].selected) {
      //     selectedLanguages.push(options[i].value);
      //   }
      // }
      // setFormData({ ...formData, [name]: selectedLanguages });
      let selectedLanguages = [...formData.languages];
      if (e.target.checked) {
        selectedLanguages.push(value);
      } else {
        // const index = selectedLanguages.findIndex((val) => val === value);

        // selectedLanguages.splice(index, index + 1);
        selectedLanguages = selectedLanguages.filter((val) => val !== value);
      }
      console.log(value);
      setFormData({ ...formData, languages: selectedLanguages });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value={"male"}
            onChange={handleChange}
            checked={formData.gender === "male"}
          />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value={"female"}
            onChange={handleChange}
            checked={formData.gender === "female"}
          />
        </div>
        <div>
          <label>Languages Known:</label>
          {/* <select
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            multiple
            required
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
          </select> */}
          <input
            type="checkbox"
            name="languages"
            id="English"
            value="english"
            checked={formData.languages.includes("english")}
            onChange={handleChange}
          />
          <label>English</label>
          <input
            type="checkbox"
            name="languages"
            id="French"
            value="french"
            checked={formData.languages.includes("french")}
            onChange={handleChange}
          />
          <label>French</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default ReactForm;
