import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
export default function Contact() {
  const contactData = [
    {
      name: " Grace Mayowale",
      role: "Frontend Developer",
      email: "grace7@yahoo.com",
      phone: "09088997765",
      image:
        "https://www.kensingtonflowers.co.uk/wp-content/uploads/2021/03/Pink-Scented-garden-bouquet-com-e1554218847392.jpg",
    },
    {
      name: "Prince Nelson",
      role: "Backend Developer",
      email: "prince8@gmail.com",
      phone: "09088557965",
      image:
        "https://www.kensingtonflowers.co.uk/wp-content/uploads/2021/03/Pink-Scented-garden-bouquet-com-e1554218847392.jpg",
    },
    {
      name: "Romola Romoluwa",
      role: "Project Manager",
      email: "Rom67@gamil.com",
      phone: "08098767554",
      image:
        "https://www.kensingtonflowers.co.uk/wp-content/uploads/2021/03/Pink-Scented-garden-bouquet-com-e1554218847392.jpg",
    },
  ];
  return (
    <div className="contactPage">
      <Navbar />
      <p className="p1">Contact Us</p>
      <div className="cardContainer">
        {contactData.map((user, index) => (
          <div className="contactCard" key={index}>
            <img src={user.image} alt="img" className="img" />
            <p>{user.name}</p>
            <p>{user.role}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
